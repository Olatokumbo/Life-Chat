import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InfoIcon from "@material-ui/icons/Info";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import style from "./Room.module.css";
function Room() {
  return (
    <div className={style.room}>
      <div className={style.room_header}>
        <div className={style.room_headerLeft}>
          <Avatar />
          <div className={style.room_headerInfo}>
            <Typography variant="body1" className={style.room_headerName}>
              David King
            </Typography>
            <Typography variant="body2" color="textSecondary">Last Seen: 21:30</Typography>
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
      <div className={style.room_body}></div>
      <div className={style.room_footer}>
        <IconButton>
          <InsertEmoticonIcon className={style.footer_icon} />
        </IconButton>
        <form>
          <input placeholder="Type Mesaage..." />
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

export default Room;
