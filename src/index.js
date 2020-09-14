import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose} from "redux";
import {auth} from "./firebase/firebase";
import * as actionTypes from "./store/actions/actionTypes";
import authReducer from "./store/reducers/auth";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    auth: authReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

auth.onAuthStateChanged((user)=>{
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
    if(user){
        console.log("LOGGED IN");
        store.dispatch({type: actionTypes.SIGNIN_SUCCESS, uid: user.uid})
    }
    else{
        console.log("LOGGED OUT");
    }
})