/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Button from "../../src/components/Button";

const onClick = jest.fn();
const buttonText = "Chat Aja";

describe("render correctly button components", () => {
  test("renders if conditional icon true", () => {
    const icon = true;
    const wrapper = shallow(
      <Button buttonText={buttonText} onClick={onClick} icon={icon} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if conditional icon false", () => {
    const icon = false;
    const wrapper = shallow(
      <Button buttonText={buttonText} onClick={onClick} icon={icon} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
