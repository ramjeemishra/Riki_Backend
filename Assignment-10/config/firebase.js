const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("../assignment-10-29fd9-firebase-adminsdk-fbsvc-222c9bae8a.json");

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

console.log("Firebase connected successfully");

module.exports = db;