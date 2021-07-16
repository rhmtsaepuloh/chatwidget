/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isCancel } from "axios";
import { socket } from "../App";

import ChatRoom from "../components/ChatRoom";
import {
  postMessages,
  loadMessages,
  uploadImage,
  getRecomendationMessages,
} from "../services/mainServices";
import {
  setUniqueRoomId,
  setMessagesList,
  setUniqueUserId,
  setProgressUploadImage,
  deleteMessages,
} from "../redux/actions/messagesActions";
import { convertTime } from "../utils/time";
import isEmpty from "lodash/isEmpty";
import { setRoutes } from "../redux/actions/routesActions";
import { convertNewMessages } from "../utils/messages";
import { setFile, setImagePreview } from "../redux/actions/fileActions";
import { replaceMessages } from "../redux/actions/messagesActions";

const ChatRoomContainer = () => {
  const [messageValue, setMessageValue] = useState("");
  const [messageValueInput, setMessageValueInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [indexMessages, setIndexMessages] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [recomendedData, setRecomendedData] = useState([]);
  const [toBottom, setToBottom] = useState(false);

  const dispatch = useDispatch();
  const { uniqueUserId, uniqueRoomId, messagesList, progressUpload } =
    useSelector((state) => state.messagesReducers);
  const messagesEndRef = useRef(null);
  const cancelFileUpload = useRef(null);
  const { dataClient } = useSelector((state) => state.clientReducers);
  const { file, urlImagePreview } = useSelector((state) => state.fileReducers);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "instant" });
  };

  const getRecomendationData = async () => {
    try {
      const key = new URLSearchParams(window.location.search).get("key");
      const res = await getRecomendationMessages(key);
      await setRecomendedData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecomendationData();
  }, []);

  useEffect(scrollToBottom, [toBottom]);

  const loadingMessage = () => {
    setLoading(true);
    const localUniqueUserId = window.sessionStorage.getItem("uniqueUserId");
    const localUniqueRoom = window.sessionStorage.getItem("uniqueRoomId");
    const data = {
      uniqueRoomId: localUniqueRoom,
      unique_user_id: localUniqueUserId,
      limit: 0,
    };
    dispatch(setUniqueRoomId(localUniqueRoom));
    dispatch(setUniqueUserId(localUniqueUserId));
    loadMessages(data)
      .then((resMessages) => {
        const messagesListReverse = resMessages.payload.comment.map((item) => {
          const newdata = item.data.map((message) => ({
            ...message,
            timestamp: convertTime(message.timestamp),
          }));
          setIndexMessages(newdata.length);
          return {
            ...item,
            data: newdata.reverse(),
          };
        });
        setLoading(false);
        dispatch(setMessagesList(messagesListReverse.reverse()));
        setTimeout(() => setToBottom((prevState) => !prevState), 100);
      })
      .catch((err) => setLoading(false));
  };

  const loadingMessageSocket = () => {
    const localUniqueUserId = window.sessionStorage.getItem("uniqueUserId");
    const localUniqueRoom = window.sessionStorage.getItem("uniqueRoomId");
    const data = {
      uniqueRoomId: localUniqueRoom,
      unique_user_id: localUniqueUserId,
      limit: 0,
    };
    dispatch(setUniqueRoomId(localUniqueRoom));
    dispatch(setUniqueUserId(localUniqueUserId));
    loadMessages(data)
      .then((resMessages) => {
        const messagesList = resMessages.payload.comment.map((item) => {
          const newdata = item.data.map((message) => ({
            ...message,
            timestamp: convertTime(message.timestamp),
          }));
          return {
            ...item,
            data: newdata.reverse(),
          };
        });
        dispatch(setMessagesList(messagesList.reverse()));
      })
      .catch((err) => console.error(err));
  };

  const checkUniqueRoomId = (payload, uniqueRoomId) => {
    const check = (obj) => obj.uniqueRoomId === uniqueRoomId;
    return payload.some(check);
  };

  const connectSocket = () => {
    const uniqueRoomId = Number(window.sessionStorage.getItem("uniqueRoomId"));
    socket.on(uniqueRoomId, async function (res) {
      if (res.payload) {
        if (checkUniqueRoomId(res.payload.list_room.data, uniqueRoomId)) {
          await loadingMessageSocket();
        }
      }
    });
  };

  useEffect(() => {
    connectSocket();
    loadingMessage();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      unique_user_id: uniqueUserId,
      type: "text",
      message: messageValue,
      uniqueRoomId,
    };
    const newComment = {
      message: messageValue,
      type: "text",
      messageUniqueId: "progress",
      timestamp: convertTime(new Date().toUTCString()),
      user: { unique_user_id: uniqueUserId },
    };
    if (urlImagePreview.length > 0) {
      const ext = file.name.split(".").pop();
      const newImage = {
        message: messageValue,
        type: "file_attachment",
        messageUniqueId: "progress",
        payload: {
          url: urlImagePreview,
          caption: messageValue,
          ext,
          file_name: file.name,
        },
        timestamp: convertTime(new Date().toUTCString()),
        user: { unique_user_id: uniqueUserId },
      };
      setDisplayEmoji(false);
      dispatch(setMessagesList(convertNewMessages(messagesList, newImage)));
      setIndexMessages((prevState) => prevState + 1);
      setToBottom((prevState) => !prevState);
      setIsDisabled(true);
      setMessageValueInput("");
      dispatch(setImagePreview(""));
      const dataImage = new FormData();
      dataImage.append("file", file);
      setTimeout(() => {
        dispatch(uploadImage(dataImage, cancelFileUpload))
          .then((res) => {
            const dataLocationImage = {
              unique_user_id: uniqueUserId,
              type: "file_attachment",
              payload: {
                url: res.location,
                caption: isEmpty(messageValue) ? null : messageValue,
              },
              message: "Kirim File",
              uniqueRoomId,
            };
            postMessages(dataLocationImage)
              .then((resLocation) => {
                const lastMessages = {
                  ...resLocation.payload.comment,
                  timestamp: convertTime(resLocation.payload.comment.timestamp),
                };
                dispatch(setProgressUploadImage(0));
                dispatch(
                  replaceMessages({ newComments: lastMessages, indexMessages })
                );
                setIsDisabled(false);
                setMessageValue("");
                dispatch(setFile(null));
              })
              .catch(() => setIsDisabled(false));
          })
          .catch((err) => {
            if (isCancel(err)) {
              dispatch(deleteMessages({ idxMessages: indexMessages }));
              setIndexMessages((prevState) => prevState - 1);
              setIsDisabled(false);
            }
            setIsDisabled(false);
          });
      }, 1000);
    }
    if (isEmpty(messageValueInput)) return null;
    if (isEmpty(urlImagePreview)) {
      dispatch(setMessagesList(convertNewMessages(messagesList, newComment)));
      setIndexMessages((prevState) => prevState + 1);
      setToBottom((prevState) => !prevState);
      setMessageValueInput("");
      setDisplayEmoji(false);
      postMessages(data).then((res) => {
        const newComments = {
          ...res.payload.comment,
          timestamp: convertTime(res.payload.comment.timestamp),
        };
        dispatch(replaceMessages({ newComments, indexMessages }));
        setMessageValue("");
      });
    }
    e.target.value = null;
  };

  const onChange = (e) => {
    setMessageValue(e.target.value);
    setMessageValueInput(e.target.value);
  };

  const onDisplayEmoji = () => {
    setDisplayEmoji(!displayEmoji);
  };

  const onSelectEmoji = (emoji) => {
    setMessageValue(messageValue + emoji.native);
    setMessageValueInput(messageValue + emoji.native);
  };

  const onCloseEmoji = () => {
    setDisplayEmoji(false);
  };

  const onChangeFile = () => {
    dispatch(setRoutes("/sendfile"));
  };

  const onDeleteImage = () => {
    dispatch(setImagePreview(""));
    dispatch(setFile(null));
    dispatch(setRoutes("/sendfile"));
  };

  const onGoBack = () => {
    dispatch(setRoutes("/lastchat"));
  };
  const onKeyPress = (e) => {
    const key = window.event.keyCode;

    if (key === 13) {
      if (window.event.shiftKey) {
        setMessageValueInput(messageValueInput);
        e.stopPropagation();
      } else {
        handleSubmit(e);
      }
    }
  };

  const cancelUpload = () => {
    if (cancelFileUpload.current) dispatch(setProgressUploadImage(0));
    cancelFileUpload.current("User has canceled the file upload.");
  };

  const onPostBack = (messageValue, payload, type) => {
    const data = {
      unique_user_id: uniqueUserId,
      type,
      message: messageValue,
      uniqueRoomId,
      payload,
    };
    const newComment = {
      message: messageValue,
      type: "text",
      messageUniqueId: "progress",
      timestamp: convertTime(new Date().toUTCString()),
      user: { unique_user_id: uniqueUserId },
    };
    dispatch(setMessagesList(convertNewMessages(messagesList, newComment)));
    setToBottom((prevState) => !prevState);
    setIndexMessages((prevState) => prevState + 1);
    postMessages(data).then((res) => {
      const newComments = {
        ...res.payload.comment,
        timestamp: convertTime(res.payload.comment.timestamp),
      };
      dispatch(replaceMessages({ newComments, indexMessages }));
    });
  };

  const downloadFile = (extension) => {
    let element = document.createElement("a");
    element.href = extension;
    element.target = "_blank";
    const open = window.open(element)
    setTimeout(() => {
      open.close()
    }, 2000);
    // element.click();
  };

  return (
    <ChatRoom
      handleSubmit={handleSubmit}
      onChange={onChange}
      messageValueInput={messageValueInput}
      messagesList={messagesList}
      uniqueUserId={uniqueUserId}
      loading={loading}
      onDisplayEmoji={onDisplayEmoji}
      onSelectEmoji={onSelectEmoji}
      displayEmoji={displayEmoji}
      onCloseEmoji={onCloseEmoji}
      onChangeFile={onChangeFile}
      urlImagePreview={urlImagePreview}
      onDeleteImage={onDeleteImage}
      dataClient={dataClient}
      messagesEndRef={messagesEndRef}
      onGoBack={onGoBack}
      file={file}
      progressUpload={progressUpload}
      onKeyPress={onKeyPress}
      cancelUpload={cancelUpload}
      onPostBack={onPostBack}
      downloadFile={downloadFile}
      isDisabled={isDisabled}
      recomendedData={recomendedData}
    />
  );
};

export default ChatRoomContainer;
