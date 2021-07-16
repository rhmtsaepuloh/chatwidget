/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import isEmpty from "lodash/isEmpty";
import Header from "./Header";
import PreviewImage from "./PreviewImage";
import Document from "./Document";
import DocumentProgress from "./DocumentProgress";
import TextMessagesProgress from "./TextMessagesProgress";
import TextMessages from "./TextMessages";
import ButtonMessages from "./ButtonMessages";
import ButtonMessagesProgress from "./ButtonMessagesProgress";
import Carousel from "./Carousel";

const Messages = ({
  urlImagePreview,
  onGoBack,
  displayEmoji,
  messagesList,
  uniqueUserId,
  messagesEndRef,
  onDeleteImage,
  logo,
  file,
  hexColor,
  progressUpload,
  cancelUpload,
  onPostBack,
  downloadFile,
  recomendedData,
}) => {
  const renderMessages = (item, hexColor, cancelUpload, progressUpload) => {
    if (item.type === "buttons") {
      return (
        <>
          {item.messageUniqueId === "progress" ? (
            <ButtonMessagesProgress
              message={item.payload.text}
              timestamp={item.timestamp}
              item={item}
              onPostBack={onPostBack}
            />
          ) : (
            <ButtonMessages
              message={item.payload.text}
              timestamp={item.timestamp}
              item={item}
              onPostBack={onPostBack}
            />
          )}
        </>
      );
    } else if (item.type === "file_attachment") {
      const fileName = item.payload.file_name
      return (
        <>
          {item.messageUniqueId === "progress" ? (
            <DocumentProgress
              extension={item.payload.ext}
              color={hexColor}
              progressUpload={progressUpload}
              sourceImage={item.payload.url}
              timestamp={item.timestamp}
              text={fileName && fileName.length > 35 ? (fileName.split(".").shift()).substring(0,35) + "....." + fileName.split(".").pop() : fileName}
              caption={item.payload.caption}
              cancelUpload={cancelUpload}
            />
          ) : (
            <Document
              extension={item.payload.url}
              color={hexColor}
              timestamp={item.timestamp}
              text={fileName && fileName.length > 35 ? (fileName.split(".").shift()).substring(0,35) + "....." + fileName.split(".").pop() : fileName}
              size={item.payload.size}
              caption={item.payload.caption}
              downloadFile={downloadFile}
            />
          )}
        </>
      );
    } else {
      return (
        <>
          {item.messageUniqueId === "progress" ? (
            <TextMessagesProgress
              message={item.message}
              timestamp={item.timestamp}
            />
          ) : (
            <TextMessages message={item.message} timestamp={item.timestamp} />
          )}
        </>
      );
    }
  };

  return isEmpty(urlImagePreview) ? (
    <>
      <Header onGoBack={onGoBack} />
      <div
        className='wrapper-message'
        style={{
          height: displayEmoji ? "60%" : "auto",
          zIndex: 1,
          marginBottom: isEmpty(recomendedData) ? 75 : 125,
        }}>
        {messagesList.map((message, key) => {
          return (
            <React.Fragment key={key}>
              {isEmpty(message.data) ? null : (
                <div className='date bg-gray-100 mx-auto w-32 clear-both rounded-sm'>
                  <p className='text-center'>{message.date}</p>
                </div>
              )}
              {message.data.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    {item.user.unique_user_id === uniqueUserId ? (
                      <div className='me bubble-messages' key={i}>
                        {renderMessages(
                          item,
                          hexColor,
                          cancelUpload,
                          progressUpload
                        )}
                      </div>
                    ) : item.type === "carousel" ? (
                      <React.Fragment key={i}>
                        <Carousel
                          onPostBack={onPostBack}
                          logoAdmin={logo}
                          item={item}
                        />
                      </React.Fragment>
                    ) : (
                      <div className='him flex' key={i}>
                        <div className='admin bubble-messages bg-white m-0 p-0'>
                          {renderMessages(
                            item,
                            hexColor,
                            cancelUpload,
                            progressUpload
                          )}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              <div className='bottom-messages bubble-messages' />
              <br />
            </React.Fragment>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </>
  ) : (
    <>
      <PreviewImage
        src={urlImagePreview}
        onDeleteImage={onDeleteImage}
        file={file}
        color={hexColor}
      />
      <div ref={messagesEndRef} />
    </>
  );
};

export default Messages;
