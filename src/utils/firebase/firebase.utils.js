import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtC-Rt9xU9PuJNQJs2VvFJi5F3dB7_hNE",
  authDomain: "authentication-ed76f.firebaseapp.com",
  databaseURL:
    "https://authentication-ed76f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentication-ed76f",
  storageBucket: "authentication-ed76f.appspot.com",
  messagingSenderId: "694403920918",
  appId: "1:694403920918:web:eba4bdb1ccca1884257137",
};

//* Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
