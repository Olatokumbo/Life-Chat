import * as actionTypes from "../actions/actionTypes";
const initialState = {
  rooms: null,
  roomInfo: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ROOM:
      return {
        ...state,
        rooms: state.rooms.concat(action.room),
      };
    case actionTypes.GET_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
      };
    case actionTypes.GET_ROOM_INFO:
      return {
        ...state,
        roomInfo: action.roomInfo,
      };
    default:
      return state;
  }
};

export default roomReducer;
