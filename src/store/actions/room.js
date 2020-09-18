import firebase, { firestore } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const createRoom = (name, password) => {
  return (dispatch) => {
    const admin = firebase.auth().currentUser.uid;
    firestore
      .collection("rooms")
      .add({
        name,
        password,
        admin,
        users: [admin],
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        console.log(doc)
        console.log("Room has been Created");
        dispatch({type: actionTypes.CREATE_ROOM, room: {id: doc.id, name, password, admin}})
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
};

export const getRooms = () => {
  let rooms = [];
  const uid = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firestore
      .collection("rooms")
      .where("users", "array-contains", uid)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          rooms.push({ ...{ id: doc.id, ...doc.data() } });
        });
      })
      .then(() => {
        dispatch({type: actionTypes.GET_ROOMS, rooms})
        console.log(rooms);
      });
    rooms = [];
  };
};


export const getRoomInfo = (roomId) =>{
  return (dispatch)=>{
    firestore
    .collection("rooms")
    .doc(roomId)
    .get()
    .then((doc)=>{
      dispatch({type: actionTypes.GET_ROOM_INFO, roomInfo: doc.data()})
    })
  }
}