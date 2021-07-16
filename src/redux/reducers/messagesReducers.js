import {
  SET_PHONE_NUMBER,
  SET_UNIQUE_ROOM_ID,
  SET_MESSAGES_LIST,
  SET_PROGRESS_UPLOAD_IMAGES,
  SET_UNIQUE_USER_ID,
  REPLACE_MESSAGES,
  DELETE_MESSAGES,
} from "../types";

const initialState = {
  phoneNumber: "",
  uniqueRoomId: "",
  messagesList: [],
  progressUpload: 0,
  uniqueUserId: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case SET_UNIQUE_ROOM_ID:
      return { ...state, uniqueRoomId: action.payload };
    case SET_MESSAGES_LIST:
      return { ...state, messagesList: action.payload };
    case SET_PROGRESS_UPLOAD_IMAGES:
      return { ...state, progressUpload: action.payload };
    case SET_UNIQUE_USER_ID:
      return { ...state, uniqueUserId: action.payload };
    case REPLACE_MESSAGES:
      const { newComments, indexMessages } = action.payload;
      return {
        ...state,
        messagesList: state.messagesList.map((message) => {
          if (message.date === "Hari ini") {
            return {
              ...message,
              data: message.data.map((item, idx) =>
                idx === indexMessages ? newComments : item
              ),
            };
          } else {
            return {
              ...message,
            };
          }
        }),
      };
    case DELETE_MESSAGES:
      const { idxMessages } = action.payload;
      return {
        ...state,
        messagesList: state.messagesList.map((message) => {
          if (message.date === "Hari ini") {
            return {
              ...message,
              data: [
                ...message.data.slice(0, idxMessages),
                ...message.data.slice(idxMessages + 1),
              ],
            };
          } else {
            return {
              ...message,
            };
          }
        }),
      };
    default:
      return state;
  }
};
