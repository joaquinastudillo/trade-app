import firebase from 'firebase'
import 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC91xJiIjQ3OR7DCgGrctDHGKRVCHb1tqU",
    authDomain: "vuejs-stock-trader-1c532.firebaseapp.com",
    databaseURL: "https://vuejs-stock-trader-1c532.firebaseio.com",
    projectId: "vuejs-stock-trader-1c532",
    storageBucket: "vuejs-stock-trader-1c532.appspot.com",
    messagingSenderId: "394575595561"
  };

  firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const dataCollection = db.collection('data')

export {
    db,
    dataCollection
}