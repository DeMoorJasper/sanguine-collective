const CONSTANTS = require('../CONSTANTS');
const fanlinks = require('../database/fanlinks');
const fanlinkStats = require('../database/fanlink-stats');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let id = isNaN(req.query.id) ? req.query.id : parseInt(req.query.id);
  let platform = req.query.platform;
  if (id && platform) {
    fanlinks.get(id).then(doc => {
      if (!doc.exists) {
        res.send({
          type: 'error',
          message: 'Fanlink not found!'
        });
      } else {
        let fanlink = doc.data();
        let link = Array.isArray(fanlink.links) ? fanlink.links.find(link => link.platform === platform) : undefined;
        if (link && link.uri) {
          fanlinkStats.add({
            fanlink: id,
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            platform: platform,
            type: 'redirect'
          });
          res.redirect(link.uri);
        } else {
          res.send({
            type: 'error',
            message: 'Platform not found!'
          });
        }
      }
    }).catch(e => {
      console.error(e);
      res.send(CONSTANTS.ERROR_MSG);
    });
  } else {
    res.send({
      type: 'error',
      message: 'Please provide an id and platform.'
    });
  }
}