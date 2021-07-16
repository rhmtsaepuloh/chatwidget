import { SET_CLIENT_DATA, SET_CONTENT } from "../types";

const initialState = {
  dataClient: {},
  content: {},
};

export default (state = initialState, action) => {
  if (action.type === SET_CLIENT_DATA) {
    return { ...state, dataClient: action.payload };
  }
  if (action.type === SET_CONTENT) {
    return { ...state, content: action.payload };
  } else {
    return state;
  }
};
