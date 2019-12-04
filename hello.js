'use strict';

module.exports.handler = function(event, context, callback) {
  const response = {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": { "Content-Type": "application/json" },
    "body": "hello,world!"
  }
  callback(null, response);
}
