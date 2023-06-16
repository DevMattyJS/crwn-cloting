import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// as the actual value we want to access
export const UserContext = createContext({
  // sets default value of context
  currentUser: null,
  setCurrentUser: () => null,
});

// a component which will be wrapped around all components, which needs access to context value (UserContext)
// => it provides a value (our context) to all children components
export const UserProvider = ({ children }) => {
  //sets initial value to a state
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Observer listener => its opened since the first run, waiting for changes in AuthState (login  / logout)
    // => we need to get rid of it when we dont need it anymore => it returns unsubscribe when completed => cleanup phase
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
