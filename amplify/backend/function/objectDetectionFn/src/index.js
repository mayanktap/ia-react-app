/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	GEO_GEOFENCECOLLECTIONC4084089_NAME
	GEO_MAP4E0345ED_NAME
	STORAGE_FILES_BUCKETNAME
	STORAGE_USERMEDIAMETADATA_NAME
	STORAGE_USERMEDIAMETADATA_ARN
	STORAGE_USERMEDIAMETADATA_STREAMARN
	rdsUsername
	rdsPassword
	rdsEndpoint
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
