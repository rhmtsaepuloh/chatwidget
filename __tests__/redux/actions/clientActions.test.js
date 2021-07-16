import { SET_CLIENT_DATA } from "../../../src/redux/types";
import { setClientData } from "../../../src/redux/actions/clientActions";

describe("client data actions", () => {
  it("should create an client data actions", () => {
    const payload = {};
    const expectedAction = {
      type: SET_CLIENT_DATA,
      payload,
    };
    expect(setClientData(payload)).toEqual(expectedAction);
  });
});
