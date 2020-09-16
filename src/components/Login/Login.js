import React from "react";
import { Typography, Button } from "@material-ui/core";
import Logo from "../../assets/images/forum.png";
import * as actionCreator from "../../store/actions";
import {connect} from "react-redux";

import style from "./Login.module.css";
const Login = ({startSignin}) => {
  return (
    <div className={style.login}>
      <div className={style.login_container}>
        <img className={style.login_logo} src={Logo} alt="" />
        <Typography variant="h5">Sign in to LifeChat</Typography>
        <Button onClick={startSignin}>Sign in with GOOGLE</Button>
      </div>
    </div>
  );
}



const mapDispatchToProps = (dispatch) =>{
  return{
    startSignin: ()=> dispatch(actionCreator.startSignin())
  }
}

export default connect(null, mapDispatchToProps)(Login);
