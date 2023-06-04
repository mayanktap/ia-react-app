const AWS = require('aws-sdk');
const options = { region: process.env.REGION };

// initialising the dynamodb sdk
const documentClient = new AWS.DynamoDB.DocumentClient(options);
const cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

class MediaInfo {
  constructor(evt) {
    this.tableName = `${process.env.dynamoname}-${process.env.ENV}`;
    this.evt = evt;
  }

  async create() {
    this.evtBody = JSON.parse(this.evt['body']);
    const filenameArray = this.evtBody.mediaFile.split('/');
    this.recordId = filenameArray[filenameArray.length - 1];
    const params = {
      TableName: this.tableName,
      Item: await this.itemToPush(),
      ConditionExpression: 'attribute_not_exists(recordId) AND attribute_not_exists(formattedDate)',
    };
    console.log(`Params to be posted to Dynamo - ${JSON.stringify(params)}`);
    try{
      const s3ObjectMetadata = await this.getItemFromPartition(this.recordId);
      if (s3ObjectMetadata) {
        console.log(`params to be pushed to dynamodb: ${JSON.stringify(params)}`);
        await documentClient.put(params).promise();
      }
      console.log('Media Information by user is successfully logged in DynamoDB.');
      return { statusCode: 200, msg: 'Record Successfully created' };
    } catch(err) {
      console.log(`Media Information by user fails to get logged in dynamoDB. Error: ${err}`);
    }
  }

  async getItemFromPartition(partitionKey) {
    const params = {
      TableName: this.tableName,
      KeyConditionExpression: 'recordId = :recordId',
      ExpressionAttributeValues: {
        ':recordId': partitionKey,
      },
    };
    console.log(`Get params - ${JSON.stringify(params)}`);
    try {
      const data = await documentClient.query(params).promise();
      if (data && data.Count) {
        return data.Items[0];
      } else {
        throw { name: 'NotFound', message: 'Requested License Data Not Found' };
      }
    } catch (err) {
      console.log(`Get media metadata error: ${err}`);
    }
  }

  get username() {
    const match = this.evt['requestContext']['authorizer']['claims']['cognito:username'].split('/').slice(-1);
    console.log('Here is the username: ', match);

    return match[0];
  }

  get userPoolId() {
    const match = this.evt['requestContext']['authorizer']['claims']['iss'].split('/').slice(-1);
    console.log('Here is the user pool id: ', match);

    return match[0];
  }

  async userFromCognito() {
    try {
      const user = await cognito.adminGetUser({
        UserPoolId: this.userPoolId,
        Username: this.username,
      }).promise();
      console.log(`Attributes of the User: ${JSON.stringify(user.UserAttributes)}`);
      return user.UserAttributes;
    } catch (err) {
      console.log(`Get media metadata error: ${err}`);
    }
  }

  /**
   * @private
   * @returns {Object}
   */
  async itemToPush() {
    const currentDate = new Date();
    const epochTimestamp = currentDate.getTime();
    const userObj = await this.userFromCognito();
    const user = userObj.reduce((acc, { Name, Value }) => ({ ...acc, [Name]: Value }), {});

    return {
      recordId: this.recordId,
      formattedDate: `${currentDate.toISOString().substring(0, 10)}-upload_media_information`,
      description: this.evtBody.description,
      tag: this.evtBody.selectedTag,
      mediaFile: this.evtBody.mediaFile,
      flightId: this.evtBody.flightId,
      vehicleId: this.evtBody.vehicleId,
      userSub: user.sub,
      userEmail: user.email,
      createdAt: epochTimestamp,
      updateAt: epochTimestamp,
      recordType: 'upload_media_information',
    };
  }

  /**
   * @private
   * @param {string} fileName 
   * @returns {string}
   */
  checkFileType(fileName) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.wmv'];
    const fileExtension = fileName.substr(fileName.lastIndexOf('.'));

    if (imageExtensions.includes(fileExtension)) {
      return 'image';
    } else if (videoExtensions.includes(fileExtension)) {
      return 'video';
    } else {
      return 'unknown';
    }
  }
}

module.exports = MediaInfo;
