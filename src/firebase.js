import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = ({
    apiKey: "AIzaSyB4JPTt0Qs-34IoAJV1KcEJTWLCWrL0Go8",
    authDomain: "ugm-connect.firebaseapp.com",
    databaseURL: "https://ugm-connect.firebaseio.com",
    projectId: "ugm-connect",
    storageBucket: "ugm-connect.appspot.com",
    messagingSenderId: "786174031211",
    appId: "1:786174031211:web:9631b674dfa0514cc8482e",
    measurementId: "G-85J7BHXDKM"
  });

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();

//firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export default db;