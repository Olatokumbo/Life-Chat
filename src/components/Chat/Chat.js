import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Chat.module.css";
function Chat() {
  return (
    <div className={style.chat}>
        <Typography className={style.chat_message}>Hi Guys!!!  ouuuyuyuyuyuy ouyuuuyyuyuyyufyufytfytfyutfyu fytfytfyutfyutfytfyutfyutfytfytfyutfyutfytfyutfyutfyutfyutfuytfyutfyutfyutfyutfytfyutfyutfyutfyutfyutfyutfyutfyfytfyutfuytfuyft</Typography>
        <Typography className={style.chat_name}>David King</Typography>
        <Typography className={style.chat_timestamp}>9:30pm</Typography>
    </div>
  );
}

export default Chat;
