import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import style from "./PrivateRoute.module.css";
const PrivateRoute = ({ isAuthenicated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenicated ? (
        <div className={style.app}>
          <div className={style.app_body}>
            <Sidebar />
            <Component {...props} />
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenicated: !!state.auth.uid,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
