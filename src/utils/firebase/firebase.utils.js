//* Check the firebase docs for more info
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxM1ZMSEKbVXIacKyC9TmH5Tm5hLUdZw",
  authDomain: "crwn-clothing-277e6.firebaseapp.com",
  projectId: "crwn-clothing-277e6",
  storageBucket: "crwn-clothing-277e6.appspot.com",
  messagingSenderId: "63472298741",
  appId: "1:63472298741:web:07f27332f92110130a73bc",
};

//* Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //* If user data does not exists => create (set) the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  //* If user data exists => return a reference to them
  return userDocRef;
};