import { setRoutes } from "../../../src/redux/actions/routesActions";
import { SET_ROUTES } from "../../../src/redux/types";

describe("routes actions", () => {
  it("should create an routes actions", () => {
    const data = "/welcome";
    const expectedAction = {
      type: SET_ROUTES,
      data,
    };
    expect(setRoutes(data)).toEqual(expectedAction);
  });
});
