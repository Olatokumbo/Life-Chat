import React, {useState} from "react";
import { Modal, Fade, makeStyles, Backdrop, TextField, Button, paper, Typography} from "@material-ui/core";
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

const EnterRoomModal = ({createRm, closeCreateRoom})=>{
    const classes = useStyles();
      const handleClose = () => {
        closeCreateRoom(true)
      };
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
                variant="outlined"
                label="Name"
                size="small"
                className={style.input}
              />
              <TextField
                type="password"
                autoFocus={true}
                variant="outlined"
                label="Password"
                size="small"
                className={style.input}
              />
              <Button
                variant="contained"
                color="primary"
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
export default EnterRoomModal