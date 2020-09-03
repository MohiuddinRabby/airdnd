import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
firebase.initializeApp(firebaseConfig);

//auth context
const AuthContext = createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};
//
//auth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
//
const getUserInfo = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    name: displayName,
    email: email,
    photo: photoURL,
  };
};
const Auth = () => {
  const [singInUser, setSingInUser] = useState(null);
  const singInWithGoole = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const signedInUserInfo = getUserInfo(result.user);
        setSingInUser(signedInUserInfo);
        // console.log(result);
        return result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        setSingInUser(null);
        // console.log(error);
      });
  };
  const signOutGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setSingInUser(null);
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    //to hold current sign in user data
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = getUserInfo(user);
        setSingInUser(currUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);
  return {
    singInUser,
    singInWithGoole,
    signOutGoogle,
  };
};
export default Auth;
