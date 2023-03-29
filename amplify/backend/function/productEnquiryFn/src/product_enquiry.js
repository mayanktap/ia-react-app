const AWS = require('aws-sdk');
const options = { region: process.env.REGION };

// initialising the dynamodb sdk
const documentClient = new AWS.DynamoDB.DocumentClient(options);
const cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

class ProductEnquiry {
  constructor(evt) {
    this.tableName = `${process.env.dynamoname}-${process.env.ENV}`;
    this.evt = evt;
  }

  async create() {
    this.evtBody = JSON.parse(this.evt['body']);
    this.recordId = `${this.evtBody.productData.firstName}-${this.evtBody.productData.lastName}`;
    const params = {
      TableName: this.tableName,
      Item: await this.itemToPush(),
      ConditionExpression: 'attribute_not_exists(recordId) AND attribute_not_exists(formattedDate)',
    };
    console.log(`Params to be posted to Dynamo - ${JSON.stringify(params)}`);
    try{
      await documentClient.put(params).promise();
      
      console.log('Product Enquiry by user is successfully logged in DynamoDB.');
      return { statusCode: 200, msg: 'Record Successfully created' };
    } catch(err) {
      console.log(`Product Enquiry by user fails to get logged in dynamoDB. Error: ${err}`);
    }
  }

  /**
   * @private
   * @returns {string}
   */
  get username() {
    const match = this.evt['requestContext']['authorizer']['claims']['cognito:username'].split('/').slice(-1);
    console.log('Here is the username: ', match);

    return match[0];
  }

  /**
   * @private
   * @returns {string}
   */
  get userPoolId() {
    const match = this.evt['requestContext']['authorizer']['claims']['iss'].split('/').slice(-1);
    console.log('Here is the user pool id: ', match);

    return match[0];
  }

  /**
   * @private
   * @returns {Object}
   */
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
    const defaultItem = {
      recordId: this.recordId,
      formattedDate: `${currentDate.toISOString().substring(0, 10)}-product-enquiry`,
      userSub: user.sub,
      userEmail: user.email,
      createdAt: epochTimestamp,
      updateAt: epochTimestamp,
      recordType: 'product-enquiry',
    };

    return {
      ...defaultItem,
      ...this.evtBody.productData,
    };
  }
}

module.exports = ProductEnquiry;
