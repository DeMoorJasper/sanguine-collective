const url = require("url");
const fanlinks = require("@sangu/firestore/fanlinks");
const fanlinkStats = require("@sangu/firestore/fanlink-stats");

async function fanlinkRedirectEndpoint(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  let { query } = url.parse(req.url, true);
  let id = isNaN(query.id) ? query.id : parseInt(query.id);
  let platform = query.platform;
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

      res.statusCode = 302;
      res.setHeader("Location", link.uri);
      res.end();
      return;
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
