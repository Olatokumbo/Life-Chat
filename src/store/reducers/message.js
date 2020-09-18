import * as actionTypes from "../actions/actionTypes";

const initialState = {
    messages: []
}

const messageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.GET_CHATS:
            return{
                ...state,
                messages: action.messages
            }
        default:
            return state;
    }
}

export default messageReducer;