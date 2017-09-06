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
const fetchProductTags = (tag_id) => database.ref(`/product_tags/${ tag_id }`).once('value');
const fetchProductsByCate = (cate_code) => database.ref('/products/').orderByChild('cate_code').equalTo(cate_code).once('value');
const fetchProductDetails = (product_code) => database.ref('/products').orderByChild('product_code').equalTo(product_code).once('value');

export { initFirebase, fetchCategories, fetchProductTags, fetchProductsByCate, fetchProductDetails };