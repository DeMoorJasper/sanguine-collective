const fanlinks = require("@sangu/firestore/fanlinks");
const fanlinkStats = require("@sangu/firestore/fanlink-stats");

async function fanlinkEndpoint(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  let id = isNaN(req.query.id) ? req.query.id : parseInt(req.query.id);
  if (!id) {
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        type: "error",
        message: "Please provide an id"
      })
    );
    return;
  }

  try {
    let doc = await fanlinks.get(id);
    if (!doc.exists) {
      res.statusCode = 404;
      res.end(
        JSON.stringify({
          type: "error",
          message: "Fanlink not found!"
        })
      );
      return;
    }

    let fanlink = doc.data();
    fanlink.id = id;
    fanlinkStats.add({
      fanlink: id,
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      type: "view"
    });
    
    res.statusCode = 200;
    res.end(JSON.stringify(fanlink));
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
}

module.exports = fanlinkEndpoint;
