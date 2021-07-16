/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Toast from "../../src/components/Toast";

const text = "Chat Aja";

describe("render correctly toast components", () => {
  test("renders if conditional display true", () => {
    const display = true;
    const wrapper = shallow(<Toast text={text} display={display} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if conditional display false", () => {
    const display = false;
    const wrapper = shallow(<Toast text={text} display={display} />);
    expect(wrapper).toMatchSnapshot();
  });
});
