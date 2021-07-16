/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import OnboardingContainer from "../container/OnboardingContainer";
import Layout from "../layout/Layout";
import LayoutChatRoom from "../layout/LayoutChatRoom";
import ChatRoomContainer from "../container/ChatRoomContainer";
import LastChatContainer from "../container/LastChatContainer";
import isEmpty from "lodash/isEmpty";
import { setRoutes } from "../redux/actions/routesActions";
import { getClientWidget, getContents } from "../services/mainServices";
import { findColor, isPrivateMode } from "../utils/ui";
import { setClientData, setContent } from "../redux/actions/clientActions";
import NotFound from "../components/NotFound";
import RatingContainer from "../container/RatingContainer";
import PrivateNotFound from "../components/PrivateNotFound";
import SendFileContainer from "../container/SendFileContainer";

const Router = () => {
  const dispatch = useDispatch();
  const { routes } = useSelector((state) => state.routesReducers);
  const key = new URLSearchParams(window.location.search).get("key");

  const checkSessionStorage = async () => {
    return new Promise((resolve) => {
      try {
        const data = window.sessionStorage;
        if (data) resolve(true);
      } catch (err) {
        resolve(false);
      }
    });
  };

  async function getAsyncClientWidget() {
    getClientWidget(key)
      .then(async (res) => {
        const modifyData = {
          ...res,
          primaryColor: findColor(res.themeColor, "primaryColor"),
          secondaryColor: findColor(res.themeColor, "secondaryColor"),
          buttonColor: findColor(res.themeColor, "buttonColor"),
          primaryTextColor: findColor(res.themeColor, "primaryTextColor"),
          secondaryTextColor: findColor(res.themeColor, "secondaryTextColor"),
          buttonTextColor: findColor(res.themeColor, "buttonTextColor"),
        };
        dispatch(setClientData(modifyData));
        isPrivateMode().then(async (isPrivate) => {
          if (isPrivate) {
            dispatch(setRoutes("/is_private_browser"));
          } else {
            if (await checkSessionStorage()) {
              if (isEmpty(window.sessionStorage.getItem("uniqueRoomId"))) {
                dispatch(setRoutes("/onboarding"));
              } else {
                dispatch(setRoutes("/chatroom"));
              }
            } else {
              dispatch(setRoutes("/is_private_browser"));
            }
          }
        });
      })
      .catch((err) => dispatch(setRoutes("/notfound")));
  }

  async function getAsyncContent() {
    try {
      const res = await getContents(key);
      dispatch(setContent(res.data));
    } catch (error) {
      console.error("message", error);
    }
  }

  useEffect(() => {
    if (isEmpty(key)) {
      dispatch(setRoutes("/notfound"));
    }
    getAsyncClientWidget();
    getAsyncContent();
  }, [dispatch]);
  const renderPages = (params) => {
    switch (params) {
      case "/onboarding":
        return <OnboardingContainer />;
      case "/chatroom":
        return <ChatRoomContainer />;
      case "/sendfile":
        return <SendFileContainer />;
      case "/lastchat":
        return <LastChatContainer />;
      case "/rating":
        return <RatingContainer />;
      case "/notfound":
        return <NotFound />;
      case "/is_private_browser":
        return <PrivateNotFound />;
      default:
        return <NotFound />;
    }
  };
  if (routes === "/chatroom") {
    return <LayoutChatRoom>{renderPages(routes)}</LayoutChatRoom>;
  } else {
    return <Layout>{renderPages(routes)}</Layout>;
  }
};

export default Router;
