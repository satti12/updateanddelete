import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAx4pmZibsvJpUbhSH0pCNKJbtNJ8TSUYg",
    authDomain: "updatdata-b3842.firebaseapp.com",
    databaseURL: "https://updatdata-b3842-default-rtdb.firebaseio.com",
    projectId: "updatdata-b3842",
    storageBucket: "updatdata-b3842.appspot.com",
    messagingSenderId: "147831963414",
    appId: "1:147831963414:web:4e2bc18d3d293934eeda37"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;