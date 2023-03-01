const MediaInfo = require('./media_info');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const mediaInfo = new MediaInfo(event);
  let data;
  try {
    switch (`${event['httpMethod']} ${event['resource']}`) {
    case 'POST /media-info':
      data = await mediaInfo.create();
      break;
    case 'GET /media-info':
      data = await mediaInfo.get();
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
      body: 'Request was unsuccessful',
    };
  }
};
