import React from "react";
import style from "./App.module.css";
import Room from "./components/Room/Room";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./hoc/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = ({ uid }) => {
  if (!uid) {
    return <Login />;
  }
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/room/:roomId" component={Room} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
  };
};
export default connect(mapStateToProps)(App);
