const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createUser = functions.auth.user()
.onCreate((user)=>{
    const userProfile = {
        displayName: user.displayName,
        email: user.email,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    } 
    return addUser(userProfile);
})

const addUser = (userInfo)=>{
    return admin.firestore().collection("users")
    .add(userInfo)
    .then(doc => console.log("User Profile has been created", doc) )
// }

// exports.createRoom = functions.firestore
// .document("rooms/{roomId}")
// .onCreate((snap, context)=>{
//     const roomId = context.params.roomId
//     return admin.firestore()
//     .collection("rooms")
//     .doc(roomId)
//     .collection("users")
//     .doc(getUserUid)
//     .add({
//         timeJoined:admin.firestore.FieldValue.serverTimestamp()
//     })
// })

// const getUserUid = ()=>{
//     return admin.auth().verifyIdToken(idToken)
//     .then(function(decodedToken) {
//       var uid = decodedToken.uid;
//       return uid
//     }).catch(function(e) {
//       return console.log(e)
//     });
}