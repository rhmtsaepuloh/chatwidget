/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import { useSelector } from "react-redux";
import Layout from "../../src/layout/Layout";

const children = <div />;

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("render correctly layout components", () => {
  test("renders with data selector", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        clientReducers: {
          dataClient: {
            secondaryColor: "#CA1234",
          },
        },
      })
    );
    const wrapper = shallow(<Layout>{children}</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders", () => {
    const wrapper = shallow(<Layout>{children}</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
