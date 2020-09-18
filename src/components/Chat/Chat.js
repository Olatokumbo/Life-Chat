import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Chat.module.css";
import moment from "moment";
import {connect} from "react-redux";
function Chat({data, uid}) {
  return (
    <div className={(uid===data.uid)? style.chat: style.chat_receiver}>
        <Typography className={style.chat_message}>{data.message}</Typography>
        <Typography className={style.chat_name}>David King</Typography>
        <Typography className={style.chat_timestamp}>{moment(data.timestamp?.toDate()).calendar()}</Typography>
    </div>
  );
}


const mapStateToProps = (state)=>{
  return{
    uid: state.auth.uid
  }
}
export default connect(mapStateToProps)(Chat);
