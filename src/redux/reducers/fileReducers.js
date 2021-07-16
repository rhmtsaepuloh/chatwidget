import { SET_IMAGE_PREVIEW, SET_FILE } from "../types";

const initialState = {
  urlImagePreview: "",
  file: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_PREVIEW:
      return { ...state, urlImagePreview: action.payload };
    case SET_FILE:
      return { ...state, file: action.payload };
    default:
      return state;
  }
};
