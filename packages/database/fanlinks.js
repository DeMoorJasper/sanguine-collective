const AWS = require("./aws");
const uuidv4 = require("uuid/v4");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const COLLECTION = "fanlinks";

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

async function add(fanlink) {
  fanlink.collection = COLLECTION;
  fanlink.id = uuidv4();

  let params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: fanlink
  };

  return dynamoDb.put(params).promise();
}

async function get(guid) {
  let params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      collection: COLLECTION,
      id: guid
    }
  };

  let result = await dynamoDb.get(params).promise();
  return result.Item;
}

exports.get = get;
exports.getAll = getAll;
exports.add = add;
