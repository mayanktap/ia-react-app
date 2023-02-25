const MediaInfo = require('./media_info');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const mediaInfo = new MediaInfo(event);
	switch (`${event['httpMethod']} ${event['resource']}`) {
	case 'POST /media-info':
		await mediaInfo.create();
		break;
	case 'GET /media-info':
		await mediaInfo.get();
		break;
	}
	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*"
		}, 
		body: JSON.stringify('Hello from Lambda!'),
	};
};
