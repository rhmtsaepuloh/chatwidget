/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import ChatRoom from "../../src/components/ChatRoom";

const props = {
  handleSubmit: jest.fn(),
  messageValueInput: "",
  onChange: jest.fn(),
  messagesList: [],
  phoneNumber: "",
  loading: false,
  onDisplayEmoji: jest.fn(),
  onSelectEmoji: jest.fn(),
  onCloseEmoji: jest.fn(),
  onChangeFile: jest.fn(),
  onDeleteImage: jest.fn(),
  messagesEndRef: null,
  onGoBack: jest.fn(),
};

describe("render correctly button components", () => {
  test("renders if displayEmoji is true and urlImagePreview is available", () => {
    const dataClient = {
      logo:
        "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
    };
    const wrapper = shallow(
      <ChatRoom
        {...props}
        dataClient={dataClient}
        displayEmoji={true}
        urlImagePreview={
          "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png"
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if displayEmoji is false and urlImagePreview is not available", () => {
    const dataClient = {
      logo:
        "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
    };
    const wrapper = shallow(
      <ChatRoom
        {...props}
        dataClient={dataClient}
        displayEmoji={false}
        urlImagePreview={""}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
