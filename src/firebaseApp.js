//import firebase module
import firebase from 'firebase'

// adding firebase snippet
const config = {
  apiKey: "AIzaSyCpOC7aGY1e_uTkedMfPAV3j7x1mensnAw",
  authDomain: "turnout-16abf.firebaseapp.com",
  databaseURL: "https://turnout-16abf.firebaseio.com",
  projectId: "turnout-16abf",
  storageBucket: "turnout-16abf.appspot.com",
  messagingSenderId: "154634503291"
};


export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')