const fanlinks = require("@sangu/database/fanlinks");
const bodyParser = require('@sangu/body-parser')

module.exports = async function(req, res) {
  res.statusCode = 403;
  return res.end('Forbidden.');

  try {
    let body = await bodyParser(req);

    if (Array.isArray(body)) {
      await Promise.all(body.map(fanlink => fanlinks.add(fanlink)));
    } else {
      await fanlinks.add(body);
    }
    
    res.statusCode = 200;
    res.end('fanlink added');
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        type: "error",
        message: "An error occured"
      })
    );
  }
};
