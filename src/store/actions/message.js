import firebase, {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const getMessages = (roomId) =>{
    let messages = [] 
    return (dispatch)=>{
        firestore
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((querySnapShot)=>{
            querySnapShot.forEach((doc)=>{
                messages.push({id: doc.id, ...doc.data()})
            })
            dispatch({type: actionTypes.GET_CHATS, messages})
            messages = []
        })
    }
}

export const sendMessage = (uid, displayName, roomId, message) =>{
    return ()=>{
        firestore
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .add({
            authorId: uid,
            displayName,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>{
            console.log("new Message has been added")
        })
    }
}