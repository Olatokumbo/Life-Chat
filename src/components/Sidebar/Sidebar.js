import React from "react";
import { Avatar, IconButton,Menu, MenuItem } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Sidebar.module.css";

const Sidebar = ({startLogout}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = ()=>{
    startLogout()
  }
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
          <IconButton onClick={handleClick}>
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

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disabled>Profile</MenuItem>
        <MenuItem onClick={handleClose} disabled>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return{
    startLogout: ()=> dispatch(actionCreator.startSignout())
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);
