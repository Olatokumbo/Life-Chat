import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import {connect} from "react-redux";
import style from "./SidebarRoom.module.css";
const SidebarRoom = ({name}) => {
  return (
    <div className={style.sidebarRoom}>
      <Avatar />
      <div className={style.sidebarRoom_info}>
      <Typography variant="h6" color="textSecondary">{name}</Typography>
      <Typography variant="body2">Last message...</Typography>
      </div>
    </div>
  );
};


// Work on this one!
const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarRoom);
