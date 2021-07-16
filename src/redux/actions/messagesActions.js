import {
  SET_PHONE_NUMBER,
  SET_UNIQUE_ROOM_ID,
  SET_MESSAGES_LIST,
  SET_PROGRESS_UPLOAD_IMAGES,
  SET_UNIQUE_USER_ID,
  REMOVE_LAST_MESSAGES,
  REPLACE_MESSAGES,
  DELETE_MESSAGES,
} from "../types";

export const setPhoneNumber = (data) => ({
  type: SET_PHONE_NUMBER,
  payload: data,
});

export const setUniqueRoomId = (data) => ({
  type: SET_UNIQUE_ROOM_ID,
  payload: data,
});

export const setMessagesList = (data) => ({
  type: SET_MESSAGES_LIST,
  payload: data,
});

export const setProgressUploadImage = (num) => ({
  type: SET_PROGRESS_UPLOAD_IMAGES,
  payload: num,
});

export const setUniqueUserId = (data) => ({
  type: SET_UNIQUE_USER_ID,
  payload: data,
});

export const removeLastMessages = () => ({
  type: REMOVE_LAST_MESSAGES,
});

export const replaceMessages = (data) => ({
  type: REPLACE_MESSAGES,
  payload: data,
});

export const deleteMessages = (data) => ({
  type: DELETE_MESSAGES,
  payload: data,
});
