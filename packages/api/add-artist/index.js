const artists = require("@sangu/database/artists");
const bodyParser = require('@sangu/body-parser')

module.exports = async function(req, res) {
  res.statusCode = 403;
  return res.end('Forbidden.');

  try {
    let body = await bodyParser(req);

    if (Array.isArray(body)) {
      await Promise.all(body.map(artist => artists.add(artist)));
    } else {
      await artists.add(body);
    }
    
    res.statusCode = 200;
    res.end('artist added');
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
