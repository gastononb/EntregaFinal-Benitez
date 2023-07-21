
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tiendapadel-38676.firebaseapp.com",
  projectId: "tiendapadel-38676",
  storageBucket: "tiendapadel-38676.appspot.com",
  messagingSenderId: "1001470160274",
  appId: "1:1001470160274:web:fb400c5ecb18f17675a54b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

