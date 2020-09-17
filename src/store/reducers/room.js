import * as actionTypes from "../actions/actionTypes";
const initialState = {
    roooms: []
}

const roomReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.CREATE_ROOM:
            return{
                ...state,
                rooms: state.rooms.concat(action.room)
            }
        default:
            return state;
    }
}

export default roomReducer;