import React from "react";
import style from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Room from "./components/Room/Room";
const App = () => {
  return (
    <div className={style.app}>
      <div className={style.app_body}>
      <Sidebar/>
      <Room/>
      </div>
    </div>
  );
};

export default App;
