const admin = require('firebase-admin');
const serviceAccount = require('./gcloud_config');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sanguine-cloud.firebaseio.com'
});

module.exports = admin.firestore();