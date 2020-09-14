import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers} from "redux";
import {auth} from "./firebase/firebase";
import authReducer from "./store/reducers/auth";
import App from "./App";

const rootReducer=combineReducers({
    auth: authReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);



auth.onAuthStateChanged((user)=>{
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
    if(user){
        console.log("LOGGED IN");
    }
    else{
        console.log("LOGGED OUT");
    }
})