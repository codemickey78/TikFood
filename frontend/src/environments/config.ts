import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB2V2cDJTpEYDH9eGU1Xve5nBdF1dvZYiY",
    authDomain: "tiktok-cloneapp.firebaseapp.com",
    projectId: "tiktok-cloneapp",
    storageBucket: "tiktok-cloneapp.appspot.com",
    messagingSenderId: "955032933018",
    appId: "1:955032933018:web:796af254769b2ce4e1c523",
    measurementId: "G-61Z2XWH9JR"
}

const initFirebase = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(initFirebase);
const fireauth = getAuth(initFirebase)

export { firestore, fireauth }