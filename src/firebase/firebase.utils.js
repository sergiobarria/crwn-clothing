import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBzTQEqqyM40CjvCbKNwkt1OMrLmUwAh-M',
  authDomain: 'crwn-db-dd0a4.firebaseapp.com',
  projectId: 'crwn-db-dd0a4',
  storageBucket: 'crwn-db-dd0a4.appspot.com',
  messagingSenderId: '166586947010',
  appId: '1:166586947010:web:029760bdf80a1ced28325b',
  measurementId: 'G-588FLPRDJ8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
