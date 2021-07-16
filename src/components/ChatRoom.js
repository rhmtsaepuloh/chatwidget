/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NimblePicker } from "emoji-mart";
import Input from "./Input";
import Loading from "./Loading";
import data from "emoji-mart/data/google.json";
import isEmpty from "lodash/isEmpty";

import "../styles/messages.css";
import Messages from "./Messages";
import RecomendationMessages from "./RecomendationMessages";
import LogoPowered from "./LogoPowered";

const ChatRoom = React.memo(
  ({
    handleSubmit,
    messageValueInput,
    onChange,
    messagesList,
    uniqueUserId,
    loading,
    onDisplayEmoji,
    onSelectEmoji,
    displayEmoji,
    onCloseEmoji,
    onChangeFile,
    urlImagePreview,
    onDeleteImage,
    dataClient,
    messagesEndRef,
    onGoBack,
    file,
    progressUpload,
    onKeyPress,
    cancelUpload,
    onPostBack,
    downloadFile,
    isDisabled,
    recomendedData,
  }) => {
    const { logo, primaryColor, secondaryTextColor } = dataClient;
    const width = window.innerWidth;
    return (
      <div
        className='relative h-full'
        style={{ background: "#eee", borderRadius: "20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: isEmpty(urlImagePreview) ? "#eee" : "#000",
          }}>
          <Messages
            urlImagePreview={urlImagePreview}
            onGoBack={onGoBack}
            displayEmoji={displayEmoji}
            messagesList={messagesList}
            uniqueUserId={uniqueUserId}
            messagesEndRef={messagesEndRef}
            onDeleteImage={onDeleteImage}
            file={file}
            hexColor={primaryColor}
            progressUpload={progressUpload}
            logo={logo}
            cancelUpload={cancelUpload}
            onPostBack={onPostBack}
            downloadFile={downloadFile}
            recomendedData={recomendedData}
          />
          <div
            className={
              urlImagePreview.length > 0
                ? "hidden"
                : "footer-chatroom flex items-center justify-center inset-x-0 fixed py-1 pb-1"
            }
            style={{
              bottom: isEmpty(recomendedData) ? "70px" : "120px",
              background: "#eee",
              zIndex: 2,
            }}>
            <LogoPowered color={secondaryTextColor} />
            <p
              className='text-xs text-center box-border ml-1'
              style={{ color: secondaryTextColor }}>
              Powered by ChatAja
            </p>
          </div>
          <RecomendationMessages
            recomendedData={recomendedData}
            onPostBack={onPostBack}
            urlImagePreview={urlImagePreview}
          />
          <Input
            isDisabled={isDisabled}
            onChange={onChange}
            value={messageValueInput}
            onClick={onDisplayEmoji}
            displayEmoji={displayEmoji}
            onCloseEmoji={onCloseEmoji}
            onChangeFile={onChangeFile}
            urlImagePreview={urlImagePreview}
            logo={logo}
            onKeyPress={onKeyPress}
          />
          {displayEmoji ? (
            <div
              className='emoji-input bg-white fixed bottom-0 mt-2'
              style={{
                zIndex: 3,
                minHeight: "250px",
              }}>
              <NimblePicker
                color={primaryColor}
                set='google'
                data={data}
                style={{
                  width: width >= 768 ? "378px" : `${width}px`,
                  height: "0px",
                  overscrollBehavior: "contain",
                }}
                onSelect={onSelectEmoji}
                i18n={{
                  clear: "Clear", // Accessible label on "clear" button
                  notfound: "No Emoji Found",
                  skintext: "Choose your default skin tone",
                  categories: {
                    search: "Search Results",
                    recent: "Frequently Used",
                    smileys: "Smileys & Emotion",
                    people: "People & Body",
                    nature: "Animals & Nature",
                    foods: "Food & Drink",
                    activity: "Activity",
                    places: "Travel & Places",
                    objects: "Objects",
                    symbols: "Symbols",
                    flags: "Flags",
                    custom: "Custom",
                  },
                  categorieslabel: "Emoji categories", // Accessible title for the list of categories
                  skintones: {
                    1: "Default Skin Tone",
                    2: "Light Skin Tone",
                    3: "Medium-Light Skin Tone",
                    4: "Medium Skin Tone",
                    5: "Medium-Dark Skin Tone",
                    6: "Dark Skin Tone",
                  },
                }}
              />
            </div>
          ) : null}
        </form>
        <Loading display={loading} />
      </div>
    );
  }
);

export default ChatRoom;
