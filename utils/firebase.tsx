import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlS2tvGDv7e6iuCZWbM2uxKfUQIE0v4hw",
  authDomain: "userlogin-8a6f1.firebaseapp.com",
  projectId: "userlogin-8a6f1",
  storageBucket: "userlogin-8a6f1.appspot.com",
  messagingSenderId: "478527993031",
  appId: "1:478527993031:web:b89d70a31df7bb3e573ae2"
  };


const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

  