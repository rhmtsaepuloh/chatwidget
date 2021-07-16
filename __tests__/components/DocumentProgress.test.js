/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import DocumentProgress from "../../src/components/DocumentProgress";

const props = {
  color: "#000",
  timestamp: "10:21",
  text: "kirim file",
  size: 781076,
  caption: "tambahkan caption",
  progressUpload: 80,
  sourceImage:
    "https://www.majalahict.com/wp-content/uploads/2020/05/Logo-ChatAja.jpg",
  cancelUpload: jest.fn(),
};

describe("render correctly document progress components", () => {
  test("renders if not exist extension", () => {
    const extension = null;
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file image", () => {
    const extension = "png";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file pdf", () => {
    const extension = "pdf";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xls", () => {
    const extension = "xls";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xlsx", () => {
    const extension = "xlsx";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file doc", () => {
    const extension = "doc";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file docx", () => {
    const extension = "docx";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file txt", () => {
    const extension = "file.txt";
    const wrapper = shallow(
      <DocumentProgress {...props} extension={extension} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
