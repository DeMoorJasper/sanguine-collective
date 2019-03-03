const AWS = require("aws-sdk");

AWS.config.region = process.env.ZEIT_AWS_REGION;
AWS.config.accessKeyId = process.env.ZEIT_AWS_ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.ZEIT_AWS_SECRET_ACCESS_KEY;

module.exports = AWS;
