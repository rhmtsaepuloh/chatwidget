/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import TextMessagesProgress from "../../src/components/TextMessagesProgress";

const props = {
  message: "cek",
  timestamp: "10:21",
};

describe("render correctly text messages progress components", () => {
  test("renders", () => {
    const wrapper = shallow(<TextMessagesProgress {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
