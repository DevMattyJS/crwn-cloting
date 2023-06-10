import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

//TODO try to do this component (functionality) by myself
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
