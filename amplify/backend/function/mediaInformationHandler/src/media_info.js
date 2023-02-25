const AWS = require('aws-sdk');
const options = { region: process.env.REGION };

// initialising the dynamodb sdk
const documentClient = new AWS.DynamoDB.DocumentClient(options);

class MediaInfo {
  constructor(evt) {
    this.tableName = `${process.env.dynamoname}-${process.env.ENV}`;
    this.evt = evt;
  }

  async create() {
    const params = {
      TableName: this.tableName,
      Item: this.itemToPush,
      ConditionExpression: 'attribute_not_exists(recordId) AND attribute_not_exists(formattedDate)',
    };
    console.log(`Params to be posted to Dynamo - ${JSON.stringify(params)}`);
    try{
      await documentClient.put(params).promise();
      console.log('Media Information by user is successfully logged in DynamoDB.');
    } catch(err) {
      console.log(`Media Information by user fails to get logged in dynamoDB. Error: ${err}`);
    }
  }

  /**
   * @private
   * @returns {Object}
   */
  get itemToPush() {
    const currentDate = new Date();
    const epochTimestamp = currentDate.getTime();

    return {
      recordId: `${this.checkFileType(this.s3ObjectKey)}_${this.s3ObjectKey.replace('public/', '')}`,
      formattedDate: currentDate.toISOString().substring(0, 10),
      
      createdAt: epochTimestamp,
      updateAt: epochTimestamp,
      recordType: 'upload_media_information',
    };
  }
}

module.exports = MediaInfo;
