import React from "react";
import { useSelector } from "react-redux";

import "./layout.scss";

const Layout = ({ children }) => {
  const { secondaryColor } = useSelector(
    (state) => state.clientReducers.dataClient
  );
  return (
    <div className='wrapper-chat-widget' style={{ background: secondaryColor }}>
      {children}
    </div>
  );
};

export default Layout;
