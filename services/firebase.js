const firebaseAdmin = require("firebase-admin");
const config = require("../config");

let db = null;
let auth = null;

const init = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(config.firebase.serviceAccount),
    databaseURL: config.firebase.databaseUrl,
  });
};

const initFirestore = () => {
  db = firebaseAdmin.firestore();
};

const initFireAuth = () => {
  auth = firebaseAdmin.auth();
};

const collection = (name) => db.collection(name);

module.exports = {
  init,
  initFireAuth,
  initFirestore,
  collection,
};
