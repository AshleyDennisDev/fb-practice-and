// import our restaurants
const restaurants = require('./restaurants.json');

// import a set of tools to talk to Firebase and Firestore
const {initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// connect to Firestore

const credentials = require('./credentials.json');

// create a collection called "restaurants"

// add each restaurant
