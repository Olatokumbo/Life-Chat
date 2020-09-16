import firebase, { auth, provider } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const startSignin = () => {
  return ()=>{
    auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log("User has Signed in")
    })
    .catch((e) => {
      console.log(e.message);
    });
  }
};

export const startSignout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.SIGNOUT_FAILED, message: e.message });
      });
  };
};
