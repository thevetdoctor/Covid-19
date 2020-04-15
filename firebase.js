import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClQ-h9wivj-4KEoH9PO8MoHmn8S3Zlm18",
    authDomain: "covid19-73f13.firebaseapp.com",
    databaseURL: "https://covid19-73f13.firebaseio.com",
    projectId: "covid19-73f13",
    storageBucket: "covid19-73f13.appspot.com",
    messagingSenderId: "722758520843",
    appId: "1:722758520843:web:8ab9f13e1056b20b75770e",
    measurementId: "G-XGWJNTYGNM"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings(settings);

  export default firebase;
