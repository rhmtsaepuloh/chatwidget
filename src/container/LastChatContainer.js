/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { setRoutes } from "../redux/actions/routesActions";
import LastChat from "../components/LastChat";
import { logoutUser } from "../services/mainServices";
import { setMessagesList } from "../redux/actions/messagesActions";

const LastChatContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onNavigation = () => {
    dispatch(setRoutes("/chatroom"));
  };
  const { dataClient } = useSelector((state) => state.clientReducers);
  const { messagesList, uniqueUserId } = useSelector(
    (state) => state.messagesReducers
  );
  const onCloseChatting = () => {
    setLoading(true);
    const data = {
      unique_user_id: uniqueUserId,
    };
    logoutUser(data)
      .then(() => {
        setLoading(false);
        dispatch(setRoutes("/rating"));
        dispatch(setMessagesList([]));
        window.sessionStorage.removeItem("uniqueRoomId");
        window.sessionStorage.removeItem("uniqueUserId");
        window.sessionStorage.removeItem("uniqueId");
      })
      .catch((err) => setLoading(false));
  };

  const lastMessage = messagesList.map((item) => {
    if (item.date === "Hari ini") {
      return item.data[item.data.length - 1];
    }
  });

  const message = () => {
    const indexLastMessage = lastMessage.length - 1;
    if (isEmpty(lastMessage[indexLastMessage])) {
      return null;
    } else if (lastMessage[indexLastMessage].type === "file_attachment") {
      return lastMessage[indexLastMessage].payload.file_name;
    } else if (lastMessage[indexLastMessage].type === "text") {
      return lastMessage[indexLastMessage].message;
    }
  };

  return (
    <LastChat
      onNavigation={onNavigation}
      onCloseChatting={onCloseChatting}
      loading={loading}
      dataClient={dataClient}
      lastMessage={lastMessage}
      message={message}
      uniqueUserId={uniqueUserId}
    />
  );
};

export default LastChatContainer;
