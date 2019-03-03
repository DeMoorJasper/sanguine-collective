const AWS = require("./aws");
const uuidv4 = require("uuid/v4");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const COLLECTION = "fanlink-stats";

function add(data) {
  data.id = uuidv4();
  data.collection = COLLECTION;
  data.timestamp = Date.now();

  let params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data
  };

  return dynamoDb.put(params).promise();
}

exports.add = add;
