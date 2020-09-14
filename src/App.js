import React from "react";
import style from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Room from "./components/Room/Room";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = ({uid}) => {
  if(!uid){
    return <Login/>
  }
  return (
    <div className={style.app}>
      <div className={style.app_body}>
        <Sidebar />
        <Router>
          <Switch>
            <Route to="/rooms/:roomId" component={Room} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    uid: state.auth.uid
  }
}
export default connect(mapStateToProps)(App);
