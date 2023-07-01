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
const mysql = require('mysql');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = process.env.rdsEndpoint;
  const username = process.env.rdsUsername;
  const password = process.env.rdsPassword;
  const database = process.env.rdsDatabaseName;

  // Create a MySQL connection
  const connection = mysql.createConnection({
    host: endpoint,
    user: username,
    password: password,
    database: database
  });

  // Execute the SQL query
  const query = 'select ip.s3_uri, ip.s3_url, ip.s3_etag, ip.image_size, od.* from image_payloads as ip inner join object_detections as od on ip.camera_id = od.camera_id and ip.operation_id = od.operation_id and ip.video_id = od.video_id and ip.frame_id = od.frame_id;';
  const result = await executeQuery(connection, query);
  console.log(result);

  // Close the database connection
  connection.end();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(result),
  };
};

function executeQuery(connection, query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
