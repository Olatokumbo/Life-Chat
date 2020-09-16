import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCXfYd8hmkf97PfuqXrtoyqjB6Go2SlceU",
  authDomain: "life-chats.firebaseapp.com",
  databaseURL: "https://life-chats.firebaseio.com",
  projectId: "life-chats",
  storageBucket: "life-chats.appspot.com",
  messagingSenderId: "702154919087",
  appId: "1:702154919087:web:608038403a9eef874e185a",
  measurementId: "G-BJWZD0E062",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
const firestore = firebase.firestore();
const auth = firebase.auth();
export { firebase as default, firestore, provider, auth };
