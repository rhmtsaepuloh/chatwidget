import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import Router from "./routes/Router";

const io = require("socket.io-client");
export const socket = io(process.env.REACT_APP_MAIN, {
  withCredentials: true, 
  extraHeaders: {
    'my-custom-header': "abcd"
  }
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
