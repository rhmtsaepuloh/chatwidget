/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Input from "../../src/components/Input";

const props = {
  onChange: jest.fn(),
  onClick: jest.fn(),
  onCloseEmoji: jest.fn(),
  onChangeFile: jest.fn(),
  urlImagePreview: "",
  value: "test",
  onKeyPress: jest.fn(),
};

describe("render correctly input components", () => {
  test("renders if displayEmoji is true", () => {
    const wrapper = shallow(<Input {...props} displayEmoji={true} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if displayEmoji is false", () => {
    const wrapper = shallow(<Input {...props} displayEmoji={false} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with value and urlImagePreview", () => {
    const wrapper = shallow(
      <Input
        {...props}
        displayClose={true}
        value={"test"}
        urlImagePreview={
          "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png"
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders without value and urlImagePreview", () => {
    const wrapper = shallow(
      <Input {...props} displayClose={false} value={""} urlImagePreview={""} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
