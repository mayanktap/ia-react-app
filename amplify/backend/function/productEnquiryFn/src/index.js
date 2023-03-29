/* Amplify Params - DO NOT EDIT
	AUTH_AMPLIFYAUTHAPPA0143CCF_USERPOOLID
	ENV
	REGION
	STORAGE_USERMEDIAMETADATA_ARN
	STORAGE_USERMEDIAMETADATA_NAME
	STORAGE_USERMEDIAMETADATA_STREAMARN
Amplify Params - DO NOT EDIT */const ProductEnquiry = require('./product_enquiry');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const productEnquiry = new ProductEnquiry(event);
  let data;
  try {
    switch (`${event['httpMethod']} ${event['resource']}`) {
    case 'POST /product-enquiry':
      data = await productEnquiry.create();
      break;
    }
    console.log(`Data sent to frontend: ${JSON.stringify(data)}`);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: data.msg,
    };
  } catch(err) {
    console.log(`Error in the response of lambda: ${err}`);
    return {
      statusCode: 403,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: 'Request was unsuccessful',
    };
  }
};
