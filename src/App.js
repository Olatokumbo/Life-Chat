import React, {useState} from "react";
import style from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Room from "./components/Room/Room";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const [user, setUser] = useState(null);
  if(!user){
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

export default App;
