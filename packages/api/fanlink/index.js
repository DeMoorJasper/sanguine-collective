const url = require("url");
const fanlinks = require("@sangu/database/fanlinks");
const fanlinkStats = require("@sangu/database/fanlink-stats");

module.exports = async function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  let { query } = url.parse(req.url, true);
  let id = isNaN(query.id) ? query.id : parseInt(query.id);
  try {
    if (id) {
      let fanlink = await fanlinks.get(id);
      if (!fanlink) {
        res.statusCode = 404;
        res.end(
          JSON.stringify({
            type: "error",
            message: "Fanlink not found!"
          })
        );
        return;
      }

      fanlink.id = id;
      fanlinkStats.add({
        fanlink: id,
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
        type: "view"
      });

      res.statusCode = 200;
      res.end(JSON.stringify(fanlink));
    } else {
      let fanlinksData = await fanlinks.getAll();
      
      res.statusCode = 200;
      res.end(JSON.stringify(fanlinksData));
    }
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
