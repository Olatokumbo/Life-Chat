import React from 'react'
import { Typography, Button } from "@material-ui/core";
import Logo from "../../assets/images/forum.png"
import style from "./Login.module.css";
function Login() {
    return (
        <div className={style.login}>
            <div className={style.login_container}>
            <img className={style.login_logo} src={Logo} alt=""/>
            <Typography variant="h5">Sign in to LifeChat</Typography>
            <Button>Sign in with GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
