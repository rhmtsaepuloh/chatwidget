import React from "react";
import isEmpty from "lodash/isEmpty";

import "../styles/Register.scss";
import Loading from "./Loading";
import LogoPowered from "./LogoPowered";

const LastChat = ({
  onNavigation,
  onCloseChatting,
  loading,
  dataClient,
  lastMessage,
  message,
  uniqueUserId,
}) => {
  const {
    primaryColor,
    secondaryColor,
    buttonColor,
    logo,
    buttonTextColor,
    secondaryTextColor,
  } = dataClient;
  const indexLastMessage = lastMessage.length - 1;
  return (
    <div className='wrapper-register' style={{ background: primaryColor }}>
      <div className='main'>
        <div className='pt-16'>
          <div className='icon-chat h-20 w-20 rounded bg-white mx-auto flex items-center justify-center'>
            <img src={logo} alt='chatajaIcon' className='h-12 w-12 mx-auto' />
          </div>
          <div className='bg-white mx-4 px-4 rounded py-4 mt-8 shadow-md'>
            <p className='text-gray-700 text-sm mb-5 font-bold'>
              Chat Terakhir
            </p>
            <div
              className='grid grid-cols-2 p-3 border border-gray-300 mb-5 rounded hover:bg-gray-400 cursor-pointer'
              onClick={onNavigation}>
              <div className='flex items-center col-span-1'>
                <img
                  src={logo}
                  alt='koperanselicon'
                  className='h-8 w-8 rounded-full mr-3'
                />
                <div className='w-3/4'>
                  <p className='text-base font-bold text-gray-700 m-0'>
                    {isEmpty(lastMessage[indexLastMessage])
                      ? "USER"
                      : lastMessage[indexLastMessage].user.unique_user_id !==
                        uniqueUserId
                      ? "ADMIN"
                      : "USER"}
                  </p>
                  <p className='text-message text-gray-700'>{message()}</p>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='float-right justify-end'>
                  {isEmpty(lastMessage[indexLastMessage]) ? null : (
                    <React.Fragment>
                      <p className='text-xs text-gray-700'>
                        {lastMessage[indexLastMessage].timestamp}
                      </p>
                      <div
                        className='h-4 w-4 rounded-full flex items-center justify-center mx-auto'
                        style={{ background: primaryColor }}>
                        <p className='text-white text-xs'>1</p>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
            <div
              className='text-center px-auto py-3 rounded cursor-pointer hover:bg-red-100'
              style={{ background: buttonColor, color: buttonTextColor }}
              onClick={onCloseChatting}>
              Akhiri Chatting
            </div>
          </div>
          <div
            className='footer-background flex items-center justify-center mt-8 inset-x-0 fixed'
            style={{
              bottom: "0px",
              padding: "10px 0px",
              background: secondaryColor,
            }}>
            <LogoPowered color={secondaryTextColor} />
            <p
              className='text-xs text-center box-border ml-1'
              style={{ color: secondaryTextColor }}>
              Powered by ChatAja
            </p>
          </div>
        </div>
      </div>
      <Loading display={loading} />
    </div>
  );
};

export default LastChat;
