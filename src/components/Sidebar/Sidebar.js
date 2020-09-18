import React, {useState, useEffect} from "react";
import { Avatar, IconButton,Menu, MenuItem } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import EnterRoomModal from "../EnterRoomModal/EnterRoomModal";
import {connect} from "react-redux";
import {Link} from "react-router-dom"; 
import * as actionCreator from "../../store/actions";
import style from "./Sidebar.module.css";

const Sidebar = ({startLogout, getRooms, rooms}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [createRm, setCreateRm] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openCreateRoom = ()=>{
    setCreateRm(true);
  }
  const closeCreateRoom =(value)=>{
    setCreateRm(!value);
  }
  const logout = ()=>{
    startLogout()
  }

  useEffect(()=>{
    getRooms()
  }, [getRooms])
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_header}>
        <Avatar />
        <div className={style.sidebar_headerRight}>
          <IconButton onClick={openCreateRoom}>
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
      {rooms && rooms.map((doc)=>(
        <Link key={doc.id} to={`/room/${doc.id}`}><SidebarRoom name={doc.name}/></Link>
      ))}
      </div>
      <EnterRoomModal createRm={createRm} closeCreateRoom={closeCreateRoom}/>
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

const mapStateToProps = (state)=>{
  return{
    rooms: state.room.rooms,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    startLogout: ()=> dispatch(actionCreator.startSignout()),
    getRooms: ()=> dispatch(actionCreator.getRooms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
