import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDnltSXfzDQMtIyH0EdFI9ld7TzYTmFoXc",
  authDomain: "crwn-db-a1966.firebaseapp.com",
  projectId: "crwn-db-a1966",
  storageBucket: "crwn-db-a1966.appspot.com",
  messagingSenderId: "575160860207",
  appId: "1:575160860207:web:182d49d7093b5c571490da",
  measurementId: "G-LH2YB7C9DS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user ', error.message);
    }

  }

  return userRef;

};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;