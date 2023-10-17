
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi_hb4s7ounQrKI-H7JUgwxM-rUyWkrg0",
  authDomain: "writenode-f398b.firebaseapp.com",
  projectId: "writenode-f398b",
  storageBucket: "writenode-f398b.appspot.com",
  messagingSenderId: "906354439891",
  appId: "1:906354439891:web:e33a26273a7d5e9ff5c626"
};
//   apiKey: "AIzaSyCi_hb4s7ounQrKI-H7JUgwxM-rUyWkrg0",
//   authDomain: "writenode-f398b.firebaseapp.com",
//   projectId: "writenode-f398b",
//   storageBucket: "writenode-f398b.appspot.com",
//   messagingSenderId: "906354439891",
//   appId: "1:906354439891:web:e33a26273a7d5e9ff5c626"

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



