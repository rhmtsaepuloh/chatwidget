import {
  SET_PHONE_NUMBER,
  SET_UNIQUE_ROOM_ID,
  SET_MESSAGES_LIST,
  SET_PROGRESS_UPLOAD_IMAGES,
  SET_UNIQUE_USER_ID,
} from "../../../src/redux/types";
import {
  setPhoneNumber,
  setUniqueRoomId,
  setMessagesList,
  replaceLastMessages,
  setProgressUploadImage,
  setUniqueUserId,
} from "../../../src/redux/actions/messagesActions";

describe("messages actions", () => {
  it("should create a phone number actions", () => {
    const payload = "";
    const expectedAction = {
      type: SET_PHONE_NUMBER,
      payload,
    };
    expect(setPhoneNumber(payload)).toEqual(expectedAction);
  });
  it("should create an unique room actions", () => {
    const payload = "";
    const expectedAction = {
      type: SET_UNIQUE_ROOM_ID,
      payload,
    };
    expect(setUniqueRoomId(payload)).toEqual(expectedAction);
  });
  it("should create messages list actions", () => {
    const payload = [];
    const expectedAction = {
      type: SET_MESSAGES_LIST,
      payload,
    };
    expect(setMessagesList(payload)).toEqual(expectedAction);
  });
  it("should set progress upload image actions", () => {
    const payload = {};
    const expectedAction = {
      type: SET_PROGRESS_UPLOAD_IMAGES,
      payload,
    };
    expect(setProgressUploadImage(payload)).toEqual(expectedAction);
  });
  it("should set unique user id actions", () => {
    const payload = "";
    const expectedAction = {
      type: SET_UNIQUE_USER_ID,
      payload,
    };
    expect(setUniqueUserId(payload)).toEqual(expectedAction);
  });
});
