import { SET_IMAGE_PREVIEW, SET_FILE } from "../types";

export const setImagePreview = (data) => ({
  type: SET_IMAGE_PREVIEW,
  payload: data,
});

export const setFile = (data) => ({
  type: SET_FILE,
  payload: data,
});
