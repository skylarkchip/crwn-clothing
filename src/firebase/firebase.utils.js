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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Check if user exists in DB
  const snapShot = await userRef.get(); // Fetch user info from DB either it exists or do not exists

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date(); // Creates new date on the time it is invoked.

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      }); // Add new user to DB
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef; // returns firebase user data
};

// Add collections to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth(); // For Authorization
export const firestore = firebase.firestore(); // For Firestore DB

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Gives access to Google Auth Provider
googleProvider.setCustomParameters({ prompt: "select_account" }); // This triggers the Google Pop up authentication
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider); // Use Sign In with Google function

export default firebase;
