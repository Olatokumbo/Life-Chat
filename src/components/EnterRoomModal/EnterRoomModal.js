import React, {useState} from "react";
import { Modal, Fade, makeStyles, Backdrop, TextField, Button, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./EnterRoomModal.module.css";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #a7a7a7de",
      boxShadow: theme.shadows[5],
      borderRadius: "10px",
      padding: theme.spacing(2, 4, 3),
    },
  }));

const EnterRoomModal = ({createRm, closeCreateRoom, createRoom})=>{
    const classes = useStyles();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
      const handleClose = () => {
        closeCreateRoom(true)
      };

    const createRoomClick = ()=>{
        createRoom(name, password);
        handleClose();
    }
    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={createRm}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={createRm}>
          <div className={classes.paper}>
            <div className={style.container}>
              <Typography align="center">Create Room</Typography>
              <TextField
              autoFocus={true}
                variant="outlined"
                label="Name"
                size="small"
                className={style.input}
                onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                size="small"
                className={style.input}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={createRoomClick}
              >
                Create
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createRoom: (name, password)=>dispatch(actionCreator.createRoom(name, password))
    }
}
export default connect(null, mapDispatchToProps)(EnterRoomModal);