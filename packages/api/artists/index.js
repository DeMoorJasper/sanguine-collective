const artists = require("@sangu/firestore/artists");

const CONSTANTS = require("../constants");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  artists
    .getAll()
    .then(artistsArray => {
      res.send(artistsArray);
    })
    .catch(e => {
      console.error(e);
      res.send(CONSTANTS.ERROR_MSG);
    });
};
