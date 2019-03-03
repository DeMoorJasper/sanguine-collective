const bodyParser = require("body-parser");

module.exports = async function(req) {
  await new Promise(resolve => bodyParser.json()(req, null, resolve));

  return req.body;
};
