import * as actionTypes from "../actions/actionTypes";
const initialState = {
  uid: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        uid: action.uid,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default authReducer;
