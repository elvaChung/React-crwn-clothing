import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6BUtG42Pqhzij18q3kWbElDV110qRUCQ",
    authDomain: "crwn-db-c679f.firebaseapp.com",
    projectId: "crwn-db-c679f",
    storageBucket: "crwn-db-c679f.appspot.com",
    messagingSenderId: "495017885877",
    appId: "1:495017885877:web:9761b91887c5966a81fefc",
    measurementId: "G-8TSLQDYEJZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;