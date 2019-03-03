const fanlinks = require("@sangu/firestore/fanlinks");

const CONSTANTS = require("../constants");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  fanlinks
    .getAll()
    .then(fanlinkArray => {
      res.send(fanlinkArray);
    })
    .catch(e => {
      console.error(e);
      res.send(CONSTANTS.ERROR_MSG);
    });
};
