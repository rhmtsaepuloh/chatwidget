/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import TextMessages from "../../src/components/TextMessages";

const props = {
  message: "cek",
  timestamp: "10:21",
};

describe("render correctly text messages components", () => {
  test("renders", () => {
    const wrapper = shallow(<TextMessages {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
