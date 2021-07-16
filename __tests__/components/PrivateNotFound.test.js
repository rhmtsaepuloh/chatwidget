/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import PrivateNotFound from "../../src/components/PrivateNotFound";

describe("render correctly private components", () => {
  test("renders", () => {
    const wrapper = shallow(<PrivateNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
