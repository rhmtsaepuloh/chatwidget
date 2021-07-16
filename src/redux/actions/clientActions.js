import { SET_CLIENT_DATA, SET_CONTENT } from "../types";

export const setClientData = (data) => ({
  type: SET_CLIENT_DATA,
  payload: data,
});

export const setContent = (data) => ({
  type: SET_CONTENT,
  payload: data,
});
