import React from "react";
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";

import "../styles/Header.scss";
import isEmpty from "lodash/isEmpty";
import { defaultText } from "../utils/ui";
import { truncateWords } from "../utils/messages";

const avatarIcon = require("../assets/logo.jpg");

const Header = React.memo(({ onGoBack }) => {
  const { primaryColor, primaryTextColor, logo } = useSelector(
    (state) => state.clientReducers.dataClient
  );
  const { contentRoomChat } = useSelector(
    (state) => state.clientReducers.content
  );
  return (
    <div
      className='header flex items-center'
      style={{ background: primaryColor, overflow: "hidden" }}>
      <FiArrowLeft
        className='arrow-icon text-white text-base font-bold cursor-pointer text-2xl'
        onClick={onGoBack}
      />
      <img
        alt='icon'
        className='avatarIcon'
        src={isEmpty(logo) ? avatarIcon : logo}
      />
      <div>
        <p className='text-koperansel' style={{ color: primaryTextColor }}>
          {truncateWords(
            defaultText(contentRoomChat, "nameTitle", "@ChatAja"),
            3,
            "..."
          )}
        </p>
        <p className='text-online' style={{ color: primaryTextColor }}>
          online
        </p>
      </div>
    </div>
  );
});

export default Header;
