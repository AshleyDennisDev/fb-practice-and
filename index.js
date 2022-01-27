// import our restaurants
const restaurants = require('./restaurants.json');

// import a set of tools to talk to Firebase and Firestore
const {initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//import credentials
const credentials = require('./credentials.json');

//connect to firebasae services
initializeApp({
    credential: cert(credentials)
});

// connect to Firestore
const db = getFirestore();

// create a collection called "restaurants"


// add each restaurant
db.collection('restaurants').add(restaurants[1])
.then(doc => {
    console.log('Added restaurant', doc.id); // id auto-generated 
})
.catch(err =>{
    console.error(err);
});