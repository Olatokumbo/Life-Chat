import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_header}>
        <Avatar />
        <div className={style.sidebar_headerRight}>
          <IconButton >
            <DonutLargeIcon style={{fontSize: '20px'}} />
          </IconButton>
          <IconButton>
            <ChatIcon style={{fontSize: '20px'}}/>
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{fontSize: '20px'}}/>
          </IconButton>
        </div>
      </div>
      <div className={style.sidebar_search}>
        <div className={style.sidebar_searchContainer}>
          <SearchOutlinedIcon />
          <input placeholder="Search..." />
        </div>
      </div>
      <div className={style.sidebar_rooms}>
        <SidebarRoom/>
        <SidebarRoom/>
        <SidebarRoom/>
        <SidebarRoom/>
        <SidebarRoom/>
        <SidebarRoom/>
        <SidebarRoom/>
      </div>
    </div>
  );
};

export default Sidebar;
