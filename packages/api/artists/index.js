const artists = require("@sangu/firestore/artists");

async function artistsEndpoint(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  try {
    let artistsData = await artists.getAll();
    res.statusCode = 200;
    res.end(JSON.stringify(artistsData));
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

module.exports = artistsEndpoint;
