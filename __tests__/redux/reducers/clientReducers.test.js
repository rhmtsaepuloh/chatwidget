import reducer from "../../../src/redux/reducers/clientReducers";
import { SET_CLIENT_DATA } from "../../../src/redux/types";

describe("client reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      dataClient: {},
      content: {},
    });
  });
  it("should handle change data client", () => {
    const res = {
      name: "Chat Aja",
      hexColor: "#CA1234",
      logo:
        "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
      phone: "085211234567",
    };
    expect(
      reducer([], {
        type: SET_CLIENT_DATA,
        payload: res,
      })
    ).toEqual({
      dataClient: res,
    });
  });
});
