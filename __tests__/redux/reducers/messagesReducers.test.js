import reducer from "../../../src/redux/reducers/messagesReducers";
import {
  SET_PHONE_NUMBER,
  SET_UNIQUE_ROOM_ID,
  SET_MESSAGES_LIST,
  SET_PROGRESS_UPLOAD_IMAGES,
  SET_UNIQUE_USER_ID,
  REPLACE_MESSAGES,
  DELETE_MESSAGES,
} from "../../../src/redux/types";

describe("messages reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      phoneNumber: "",
      uniqueRoomId: "",
      messagesList: [],
      progressUpload: 0,
      uniqueUserId: "",
    });
  });
  it("should handle set phone number", () => {
    const phoneNumber = "+6285345777888";
    expect(
      reducer([], {
        type: SET_PHONE_NUMBER,
        payload: phoneNumber,
      })
    ).toEqual({
      phoneNumber,
    });
  });
  it("should handle set unique room Id", () => {
    const uniqueRoomId = "30943124";
    expect(
      reducer([], {
        type: SET_UNIQUE_ROOM_ID,
        payload: uniqueRoomId,
      })
    ).toEqual({
      uniqueRoomId,
    });
  });
  it("should handle set unique room Id", () => {
    const messagesList = [{ date: "Hari ini", data: Array(1) }];
    expect(
      reducer([], {
        type: SET_MESSAGES_LIST,
        payload: messagesList,
      })
    ).toEqual({
      messagesList,
    });
  });
  it("should handle set progress image", () => {
    const progressUpload = 0;
    expect(
      reducer([], {
        type: SET_PROGRESS_UPLOAD_IMAGES,
        payload: progressUpload,
      })
    ).toEqual({
      progressUpload,
    });
  });
  it("should handle set progress image", () => {
    const uniqueUserId = "user_7d5ff552f1fc03923da07aa57cf49aa7_bot_36494";
    expect(
      reducer([], {
        type: SET_UNIQUE_USER_ID,
        payload: uniqueUserId,
      })
    ).toEqual({
      uniqueUserId,
    });
  });
  it("should replaces messages", () => {
    const newComments = {
      payload: {},
      message: "testA",
      type: "text",
      timestamp: "2020-11-18T08:10:16Z",
    };
    const indexMessages = 0;
    const messagesList = [
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
          {
            payload: {},
            message: "test",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Hari ini",
      },
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Kemarin",
      },
    ];
    expect(
      reducer(
        { messagesList },
        {
          type: REPLACE_MESSAGES,
          payload: { newComments, indexMessages },
        }
      )
    ).toEqual({
      messagesList: messagesList.map((message) => {
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
    });
  });
  it("should remove messages", () => {
    const idxMessages = 0;
    const messagesList = [
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
          {
            payload: {},
            message: "test",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Hari ini",
      },
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Kemarin",
      },
    ];
    expect(
      reducer(
        { messagesList },
        {
          type: DELETE_MESSAGES,
          payload: { idxMessages },
        }
      )
    ).toEqual({
      messagesList: messagesList.map((message) => {
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
    });
  });
});
