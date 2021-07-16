import { SET_ROUTES } from "../types";

const initialState = {
  routes: "/onboarding",
};

export default (state = initialState, action) => {
  if (action.type === SET_ROUTES) {
    return { ...state, routes: action.data };
  } else {
    return state;
  }
};
