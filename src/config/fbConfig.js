import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCehdntdWsQgDktn2vM7rg9IsHfav7OIaQ",
  authDomain: "cricket-1fa9b.firebaseapp.com",
  databaseURL: "https://cricket-1fa9b.firebaseio.com",
  projectId: "cricket-1fa9b",
  storageBucket: "cricket-1fa9b.appspot.com",
  messagingSenderId: "872981313255"
};

firebase.initializeApp(config);

firebase.firestore();
firebase.auth();

export default firebase;
