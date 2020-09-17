import firebase, {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const createRoom = (name, password) =>{
    return ()=>{
        firestore
        .collection("rooms")
        .add({
            name,
            password,
            dateCreated: firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>{
            console.log("Room has been Created")
        }).catch((e)=>{
            console.log(e.message);
        })
    }
}

export const getRooms = () =>{
    const rooms = [];
    return (dispatch)=>{
        firestore
        .collection("rooms")
        .get()
        .then((doc)=>{
            rooms.push({...{id: doc.id, ...doc.data()}})
        })
        .then(()=>{
            dispatch({type: actionTypes.GET_ROOMS})
        })

    }
}