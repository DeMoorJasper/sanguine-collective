const AWS = require("./aws");
const uuidv4 = require("uuid/v4");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const COLLECTION = "artists";

async function getAll() {
  let params = {
    TableName: process.env.DYNAMODB_TABLE,
    ExpressionAttributeNames: {
      "#c": "collection"
    },
    ExpressionAttributeValues: {
      ":c": COLLECTION
    },
    KeyConditionExpression: "#c = :c"
  };

  let result = await dynamoDb.query(params).promise();

  return result.Items;
}

async function add(artist) {
  artist.collection = COLLECTION;
  artist.id = uuidv4();

  let params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: artist
  };

  return dynamoDb.put(params).promise();
}

exports.getAll = getAll;
exports.add = add;
