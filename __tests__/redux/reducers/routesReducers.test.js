import reducer from "../../../src/redux/reducers/routesReducers";
import { SET_ROUTES } from "../../../src/redux/types";

describe("routes reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      routes: "/onboarding",
    });
  });
  it("should handle change routing", () => {
    expect(
      reducer([], {
        type: SET_ROUTES,
        data: "/welcome",
      })
    ).toEqual({
      routes: "/welcome",
    });
  });
});
