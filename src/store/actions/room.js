import firebase, { firestore } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const createRoom = (name, password) => {
  return () => {
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
        console.log(doc);
        console.log("Room has been Created");
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
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.forEach((doc) => {
          rooms.push({ ...{ id: doc.id, ...doc.data() } });
        });
        dispatch({ type: actionTypes.GET_ROOMS, rooms });
        // console.log(rooms);
        rooms = [];
      });
  };
};

export const getRoomInfo = (roomId) => {
  return (dispatch) => {
    firestore
      .collection("rooms")
      .doc(roomId)
      .get()
      .then((doc) => {
        dispatch({ type: actionTypes.GET_ROOM_INFO, roomInfo: doc.data() });
      });
  };
};

export const enterRoom = (uid, name, password) => {
  return () => {
    firestore
      .collection("rooms")
      .where("name", "==", name)
      .where("password", "==", password)
      .get()
      .then((snapshot) => {
        const thing = snapshot.docs[0];
        thing.ref.update({
          users: firebase.firestore.FieldValue.arrayUnion(uid),
        });
      })
      .then(() => {
        console.log("Entered a Room");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
};

// firestore
// .collection("rooms")
// .doc(roomId)
// .update({
//   users:  firebase.firestore.FieldValue.arrayUnion(uid)
// }).then(()=>{
//   console.log("A user has joined the chat")
// }).catch((e)=>{
//   console.log(e.message)
// })
