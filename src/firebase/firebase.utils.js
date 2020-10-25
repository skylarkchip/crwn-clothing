import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbf-XuxVv-AxFRyqNAX5YZ2_JEzsc0biw",
  authDomain: "crwn-db-fc028.firebaseapp.com",
  databaseURL: "https://crwn-db-fc028.firebaseio.com",
  projectId: "crwn-db-fc028",
  storageBucket: "crwn-db-fc028.appspot.com",
  messagingSenderId: "273551982386",
  appId: "1:273551982386:web:5106c5873a72d793",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Gives access to Google Auth Provider
provider.setCustomParameters({ propmt: "select_account" }); // This triggers the Google Pop up authentication
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
