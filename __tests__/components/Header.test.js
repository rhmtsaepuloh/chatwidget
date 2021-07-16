/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import { useSelector } from "react-redux";

import Header from "../../src/components/Header";

const onGoBack = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("render correctly header components", () => {
  test("renders with contain data selector", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        clientReducers: {
          dataClient: {
            name: "Chat Aja",
            hexColor: "#CA1234",
            logo:
              "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
          },
          content: {
            contentRoomChat: {
              nameTitle: "@ChatAja",
            },
          },
        },
      })
    );
    const wrapper = shallow(<Header onGoBack={onGoBack} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders without contain data selector", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        clientReducers: {
          dataClient: {
            name: "Chat Aja",
            hexColor: "",
            logo: "",
          },
          content: {
            contentRoomChat: {
              nameTitle: "@ChatAja",
            },
          },
        },
      })
    );
    const wrapper = shallow(<Header onGoBack={onGoBack} />);
    expect(wrapper).toMatchSnapshot();
  });
});
