const fanlinks = require("@sangu/database/fanlinks");

module.exports = async function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  try {
    let fanlinksData = await fanlinks.getAll();
    res.statusCode = 200;
    res.end(JSON.stringify(fanlinksData));
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
