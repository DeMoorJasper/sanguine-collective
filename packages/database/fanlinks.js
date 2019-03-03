const firestore = require('./firestore');

const COLLECTION = 'fanlinks';

function add(data) {
  return firestore.collection(COLLECTION).add(data);
}

function set(id, data) {
  return firestore.collection(COLLECTION).doc(id).set(data);
}

function getNumeric(id) {
  return new Promise((resolve, reject) => {
    console.log('Get numeric fanlink');
    firestore.collection(COLLECTION).where('numId', '==', id).get().then(snapshot => {
      let results = [];
      snapshot.forEach(doc => results.push(doc));
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        resolve({
          exists: false
        });
      }
    }).catch(reject);
  });
}

function get(id) {
  if (isNaN(id)) {
    return firestore.collection(COLLECTION).doc(id).get();
  } else {
    return getNumeric(id);
  }
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