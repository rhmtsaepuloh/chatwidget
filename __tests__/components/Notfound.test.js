/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../src/components/NotFound";

describe("render correctly not found pages", () => {
  test("renders", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
