import { combineReducers } from "redux";
import routesReducers from "./routesReducers";
import messagesReducers from "./messagesReducers";
import clientReducers from "./clientReducers";
import fileReducers from "./fileReducers";

export default combineReducers({
  routesReducers,
  messagesReducers,
  clientReducers,
  fileReducers,
});
