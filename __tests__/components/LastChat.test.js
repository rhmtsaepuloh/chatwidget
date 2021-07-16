/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import LastChat from "../../src/components/LastChat";

const lastMessage = [
  {
    payload: {},
    message: "tes",
    type: "text",
    timestamp: "2020-09-21T04:52:10Z",
    user: {
      fullname: "Client Koperansel",
      avatar_url:
        "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
      phone_number: "+6285608849965",
    },
    messageUniqueId: "XXFN1slyO9Km9FXBOuZa1600663929",
    id: 397649556,
  },
];

const emptyLastMessage = [];

const props = {
  onNavigation: jest.fn(),
  onCloseChatting: jest.fn(),
  message: jest.fn(),
  dataClient: {
    hexColor: "#CA1234",
    logo:
      "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
  },
  uniqueUserId: "user_400f000f319f70f518a53f4d152684b4_bot_36494",
};

describe("render correctly lastchat components", () => {
  test("renders if loading true and last message contain data", () => {
    const wrapper = shallow(
      <LastChat {...props} loading={true} lastMessage={lastMessage} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if loading false and last message contain data", () => {
    const wrapper = shallow(
      <LastChat {...props} loading={false} lastMessage={lastMessage} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if loading true and last message is empty", () => {
    const wrapper = shallow(
      <LastChat {...props} loading={true} lastMessage={emptyLastMessage} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if loading false and last message is empty", () => {
    const wrapper = shallow(
      <LastChat {...props} loading={false} lastMessage={emptyLastMessage} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
