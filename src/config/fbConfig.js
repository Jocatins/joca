import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAIWEr4V3h5QpZK65D-A5ORAsIPrj4ezWk",
    authDomain: "jocatins-e6ca7.firebaseapp.com",
    databaseURL: "https://jocatins-e6ca7.firebaseio.com",
    projectId: "jocatins-e6ca7",
    storageBucket: "jocatins-e6ca7.appspot.com",
    messagingSenderId: "622725173396",
    appId: "1:622725173396:web:350cb204a5de31d315a481",
    measurementId: "G-Q57EMTZ38X"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});


export default firebase;