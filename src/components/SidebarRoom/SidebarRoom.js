import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import style from "./SidebarRoom.module.css";
const SidebarRoom = () => {
  return (
    <div className={style.sidebarRoom}>
      <Avatar />
      <div className={style.sidebarRoom_info}>
      <Typography variant="h6">Room name</Typography>
      <Typography variant="body2">Last message...</Typography>
      </div>
    </div>
  );
};

export default SidebarRoom;
