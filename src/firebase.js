import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAWJ1OZUb0qb0COoL_Zk9ClMwG4iGTNz2c",
  authDomain: "discord-clone-96f98.firebaseapp.com",
  projectId: "discord-clone-96f98",
  storageBucket: "discord-clone-96f98.appspot.com",
  messagingSenderId: "351651492333",
  appId: "1:351651492333:web:07fa0f977654b31b4f77e4",
  measurementId: "G-MN5HBNSBE4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
