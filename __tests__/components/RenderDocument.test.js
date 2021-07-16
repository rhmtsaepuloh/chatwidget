/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import RenderDocument from "../../src/components/RenderDocument";
import { FaFilePdf } from "react-icons/fa";

const props = {
  icon: <FaFilePdf />,
  text: "text",
  extension: "pdf",
  splitExtension: "file.pdf",
  size: 180,
  timestamp: "10:20",
  downloadFile: jest.fn(),
  caption: "test",
};

describe("render correctly render document components", () => {
  test("renders", () => {
    const wrapper = shallow(<RenderDocument {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
