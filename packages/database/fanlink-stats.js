const firestore = require('./firestore');

const COLLECTION = 'fanlink-stats';

function add(data) {
  data.timestamp = Date.now();
  return firestore.collection(COLLECTION).add(data);
}

function set(id, data) {
  return firestore.collection(COLLECTION).doc(id).set(data);
}

function get(id) {
  return firestore.collection(COLLECTION).doc(id).get();
}

function getAll() {
  return new Promise((resolve, reject) => {
    firestore.collection(COLLECTION).orderBy('timestamp', 'desc').get().then(snapshot => {
      let results = [];
      snapshot.forEach(doc => {
        let item = doc.data();
        item.id = doc.id;
        results.push(item);
      });
      return resolve(results);
    }).catch(reject);
  });
}

exports.add = add;
exports.set = set;
exports.get = get;
exports.getAll = getAll;