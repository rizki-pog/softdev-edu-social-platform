import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGQzP0AzTMNmvekS0FQznVKO_0Oe6hlk4",
  authDomain: "ugm-connect-85fb7.firebaseapp.com",
  projectId: "ugm-connect-85fb7",
  storageBucket: "ugm-connect-85fb7.appspot.com",
  messagingSenderId: "459866726659",
  appId: "1:459866726659:web:aad3a1b54c3a85ea358936",
  measurementId: "G-HYVGGX2ZS9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db; 
