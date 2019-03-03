const fanlinks = require("@sangu/firestore/fanlinks");
const fanlinkStats = require("@sangu/firestore/fanlink-stats");

const CONSTANTS = require("../constants");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let id = isNaN(req.query.id) ? req.query.id : parseInt(req.query.id);
  if (id) {
    fanlinks
      .get(id)
      .then(doc => {
        if (!doc.exists) {
          res.send({
            type: "error",
            message: "Fanlink not found!"
          });
        } else {
          let fanlink = doc.data();
          fanlink.id = id;
          fanlinkStats.add({
            fanlink: id,
            ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
            type: "view"
          });
          res.send(fanlink);
        }
      })
      .catch(e => {
        console.error(e);
        res.send(CONSTANTS.ERROR_MSG);
      });
  } else {
    res.send("Please provide an id.");
  }
};
