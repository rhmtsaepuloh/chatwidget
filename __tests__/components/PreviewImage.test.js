/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import PreviewImage from "../../src/components/PreviewImage";

const props = {
  color: "#fff",
  onDeleteImage: jest.fn(),
  src: "",
};

describe("render correctly preview image components", () => {
  test("renders file image", () => {
    const file = {
      name: "png",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file pdf", () => {
    const file = {
      name: "pdf",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file doc", () => {
    const file = {
      name: "doc",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file docx", () => {
    const file = {
      name: "docx",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xls", () => {
    const file = {
      name: "xls",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xlsx", () => {
    const file = {
      name: "xlsx",
    };
    const wrapper = shallow(<PreviewImage {...props} file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
});
