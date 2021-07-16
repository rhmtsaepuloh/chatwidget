/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Messages from "../../src/components/Messages";

const props = {
  onGoBack: jest.fn(),
  messagesList: [
    {
      date: "Hari ini",
      data: [
        {
          id: 420871933,
          message: "cek",
          messageUniqueId: "bzZvNGNu7ezlzTBdPSlE1602126125",
          payload: {},
          timestamp: "10:02",
          type: "text",
          user: {
            avatar_url:
              "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
            fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
            phone_number: null,
            unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
          },
        },
        {
          id: 42087193,
          message:
            "[file] http://chataja-widget-be-dev.vsan-apps.playcourt.id/public/1602128346174-js.png [/file]",
          messageUniqueId: "WPK4cjF2hdfxVlwVuUD31602128347",
          payload: {
            caption: "tambahkan",
            encryption_key: "",
            file_name: "js.png",
            pages: 1,
            size: 4689,
            url:
              "http://chataja-widget-be-dev.vsan-apps.playcourt.id/public/1602128346174-js.png",
          },
          timestamp: "10:39",
          type: "file_attachment",
          user: {
            avatar_url:
              "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
            fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
            phone_number: null,
            unique_user_id: "user_36d7cf432e381bbf0fb17e7a4f",
          },
        },
      ],
    },
  ],
  messagesEndRef: null,
  onDeleteImage: jest.fn(),
  logo:
    "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
  file: {},
  hexColor: "#000",
  progressUpload: 0,
  uniqueUserId: "user_36d7cf432e381bbf0fb17e7a4",
};

describe("render correctly messages components", () => {
  test("renders if displayEmoji is true and urlImagePreview is available", () => {
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={true}
        urlImagePreview={
          "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png"
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if displayEmoji is false and urlImagePreview is not available", () => {
    const wrapper = shallow(
      <Messages {...props} displayEmoji={false} urlImagePreview={null} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if messages data is null", () => {
    const messagesList = [
      {
        date: "Hari ini",
        data: [],
      },
    ];
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        messagesList={messagesList}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders messages on user", () => {
    const wrapper = shallow(
      <Messages {...props} displayEmoji={false} urlImagePreview={null} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders messages on admin", () => {
    const uniqueUserId = null;
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        uniqueUserId={uniqueUserId}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if file upload is progress on user", () => {
    const messagesList = [
      {
        date: "Hari ini",
        data: [
          {
            id: 420871933,
            message: "cek",
            messageUniqueId: "progress",
            payload: {},
            timestamp: "10:02",
            type: "file_attachment",
            user: {
              avatar_url:
                "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
              fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
              phone_number: null,
              unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
            },
          },
        ],
      },
    ];
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        messagesList={messagesList}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if file upload is progress on admin", () => {
    const uniqueUserId = null;
    const messagesList = [
      {
        date: "Hari ini",
        data: [
          {
            id: 420871933,
            message: "cek",
            messageUniqueId: "progress",
            payload: {},
            timestamp: "10:02",
            type: "file_attachment",
            user: {
              avatar_url:
                "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
              fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
              phone_number: null,
              unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
            },
          },
        ],
      },
    ];
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        messagesList={messagesList}
        uniqueUserId={uniqueUserId}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders messages is progress on user", () => {
    const messagesList = [
      {
        date: "Hari ini",
        data: [
          {
            id: 420871933,
            message: "cek",
            messageUniqueId: "progress",
            payload: {},
            timestamp: "10:02",
            type: "text",
            user: {
              avatar_url:
                "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
              fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
              phone_number: null,
              unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
            },
          },
        ],
      },
    ];
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        messagesList={messagesList}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders messages is progress on admin", () => {
    const uniqueUserId = null;
    const messagesList = [
      {
        date: "Hari ini",
        data: [
          {
            id: 420871933,
            message: "cek",
            messageUniqueId: "progress",
            payload: {},
            timestamp: "10:02",
            type: "text",
            user: {
              avatar_url:
                "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
              fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
              phone_number: null,
              unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
            },
          },
        ],
      },
    ];
    const wrapper = shallow(
      <Messages
        {...props}
        displayEmoji={false}
        urlImagePreview={null}
        messagesList={messagesList}
        uniqueUserId={uniqueUserId}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
