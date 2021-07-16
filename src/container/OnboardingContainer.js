import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Onboarding from "../components/Onboarding";
import {
  registerUser,
  createChatRoom,
  autoResponder,
} from "../services/mainServices";
import {
  setUniqueUserId,
  setUniqueRoomId,
} from "../redux/actions/messagesActions";
import { setRoutes } from "../redux/actions/routesActions";

const OnboardingContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { dataClient, content } = useSelector((state) => state.clientReducers);
  const { phone } = useSelector((state) => state.clientReducers.dataClient);
  const key = new URLSearchParams(window.location.search).get("key");

  const onRegister = async () => {
    try {
      setLoading(true);
      const res = await registerUser();
      const { unique_user_id } = await res.payload;
      const item = await createChatRoom({
        unique_user_id,
        phone_target: phone,
      });
      await dispatch(setUniqueUserId(unique_user_id));
      await window.sessionStorage.setItem("uniqueUserId", unique_user_id);
      const { uniqueRoomId, uniqueId } = await item.payload;
      await autoResponder({ unique_user_id, uniqueRoomId }, key);
      await dispatch(setUniqueRoomId(uniqueRoomId));
      await window.sessionStorage.setItem("uniqueRoomId", uniqueRoomId);
      await window.sessionStorage.setItem("uniqueId", uniqueId);
      setLoading(false);
      dispatch(setRoutes("/chatroom"));
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Onboarding
      dataClient={dataClient}
      loading={loading}
      onRegister={onRegister}
      content={content}
    />
  );
};

export default OnboardingContainer;
