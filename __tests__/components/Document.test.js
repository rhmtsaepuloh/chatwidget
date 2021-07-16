/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Document from "../../src/components/Document";

const props = {
  color: "#000",
  timestamp: "10:21",
  text: "kirim file",
  size: 781076,
  caption: "tambahkan caption",
};

describe("render correctly document components", () => {
  test("renders if not exist extension", () => {
    const extension = null;
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file image", () => {
    const extension = "file.png";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file pdf", () => {
    const extension = "file.pdf";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xls", () => {
    const extension = "file.xls";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file xlsx", () => {
    const extension = "file.xlsx";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file doc", () => {
    const extension = "file.doc";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file docx", () => {
    const extension = "file.docx";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders file txt", () => {
    const extension = "file.txt";
    const wrapper = shallow(<Document {...props} extension={extension} />);
    expect(wrapper).toMatchSnapshot();
  });
});
