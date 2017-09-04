import * as firebase from 'firebase';

let database;

const initFirebase = () => {
  let config = {
    apiKey: "AIzaSyBwx-ezu6cECz5EVHd8iVECkDMAbxFFhzY",
    authDomain: "dabbble-nisillus-react.firebaseapp.com",
    databaseURL: "https://dabbble-nisillus-react.firebaseio.com",
    projectId: "dabbble-nisillus-react",
    storageBucket: "dabbble-nisillus-react.appspot.com",
    messagingSenderId: "836796851405"
  };

  firebase.initializeApp(config);
  database = firebase.database();
};

const fetchCategories = () => database.ref('/categories').once('value');

export { initFirebase, fetchCategories };