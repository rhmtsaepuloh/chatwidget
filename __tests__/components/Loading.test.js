/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Loading from "../../src/components/Loading";

describe("render correctly loading components", () => {
  test("renders display is true", () => {
    const wrapper = shallow(<Loading display={true} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders display is false", () => {
    const wrapper = shallow(<Loading display={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
