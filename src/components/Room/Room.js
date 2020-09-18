import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InfoIcon from "@material-ui/icons/Info";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import Chat from "../Chat/Chat";
import * as actionCreator from "../../store/actions";
import { connect } from "react-redux";
import moment from "moment";
import style from "./Room.module.css";
function Room({
  getMessages,
  sendMessage,
  messages,
  getRoomInfo,
  roomInfo,
  uid,
  match: {
    params: { roomId },
  },
}) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    getMessages(roomId);
    getRoomInfo(roomId);
  }, [getMessages, roomId, getRoomInfo]);

  const sendMessageForm = (e) =>{
    e.preventDefault();
    sendMessage(uid, roomId, message);
    setMessage("");
  }
  return (
    <div className={style.room}>
      <div className={style.room_header}>
        <div className={style.room_headerLeft}>
          <Avatar />
          <div className={style.room_headerInfo}>
            <Typography variant="body1" className={style.room_headerName}>
              {roomInfo?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Created at { (roomInfo?.dateCreated) ? moment(roomInfo.dateCreated.toDate()).format('dddd MMMM D YYYY') : "Loading..."}
            </Typography>
          </div>
        </div>
        <div className={style.room_headerRight}>
          <IconButton>
            <MoreVertIcon style={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton>
            <InfoIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
      </div>
      <div className={style.room_body}>
      {messages.map((data)=><Chat key={data.id} data={data}/>)}
      </div>
      <div className={style.room_footer}>
        <IconButton>
          <InsertEmoticonIcon className={style.footer_icon} />
        </IconButton>
        <form onSubmit={sendMessageForm}>
          <input  required placeholder="Type Mesaage..." value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <IconButton type="submit" className={style.footer_icon_send}>
            <SendIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </form>
        <IconButton>
          <MicIcon className={style.footer_icon} />
        </IconButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
    messages: state.message.messages,
    roomInfo: state.room.roomInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (roomId) => dispatch(actionCreator.getMessages(roomId)),
    sendMessage: (uid, roomId, message) => dispatch(actionCreator.sendMessage(uid, roomId, message)),
    getRoomInfo: (roomId) => dispatch(actionCreator.getRoomInfo(roomId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
