const fanlinks = require("@sangu/firestore/fanlinks");
const fanlinkStats = require("@sangu/firestore/fanlink-stats");

async function fanlinkRedirectEndpoint(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  let id = isNaN(req.query.id) ? req.query.id : parseInt(req.query.id);
  let platform = req.query.platform;
  if (!id || !platform) {
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        type: "error",
        message: "Please provide an id and platform"
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
    let link = Array.isArray(fanlink.links)
      ? fanlink.links.find(link => link.platform === platform)
      : undefined;
    if (link && link.uri) {
      fanlinkStats.add({
        fanlink: id,
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
        platform: platform,
        type: "redirect"
      });
      res.redirect(link.uri);
    } else {
      res.statusCode = 404;
      res.end(
        JSON.stringify({
          type: "error",
          message: "Platform not found!"
        })
      );
      return;
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
}

module.exports = fanlinkRedirectEndpoint;
