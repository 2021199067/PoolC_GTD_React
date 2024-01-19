import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// web app's Firebase configuration provided as code snippet
const firebaseConfig = {
  apiKey: "AIzaSyAY_XiwY1iO_VMQpfy0bdzjikbfoL4ygBY",
  authDomain: "poolc-gtd.firebaseapp.com",
  projectId: "poolc-gtd",
  storageBucket: "poolc-gtd.appspot.com",
  messagingSenderId: "749310829844",
  appId: "1:749310829844:web:34d3e86f61632476388e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);