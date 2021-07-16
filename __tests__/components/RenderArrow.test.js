import React from "react";
import { shallow } from "enzyme";
import RenderArrow from "../../src/components/RenderArrow";

const props = {
  onClick: jest.fn(),
  children: React.Component,
};

describe("render correctly render Arrow components", () => {
  test("renders", () => {
    const wrapper = shallow(<RenderArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
