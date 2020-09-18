import * as actionTypes from "../actions/actionTypes";
const initialState = {
  uid: null,
  displayName: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        uid: action.uid,
        displayName: action.displayName,
        message: null,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        message: action.message,
      };
    case actionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        uid: null,
        displayName: null,
        message: null,
      };
    case actionTypes.SIGNOUT_FAILED:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default authReducer;
