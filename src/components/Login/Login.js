import React from "react";
import { Typography, Button } from "@material-ui/core";
import Logo from "../../assets/images/forum.png";
import { auth, provider } from "../../firebase/firebase";
import style from "./Login.module.css";
function Login() {
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
          console.log(result)
      })
      .catch((e) => {
          console.log(e.message)
      });
  };
  return (
    <div className={style.login}>
      <div className={style.login_container}>
        <img className={style.login_logo} src={Logo} alt="" />
        <Typography variant="h5">Sign in to LifeChat</Typography>
        <Button onClick={signin}>Sign in with GOOGLE</Button>
      </div>
    </div>
  );
}

export default Login;
