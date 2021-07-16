/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import { FaFilePdf } from "react-icons/fa";
import RenderDocumentProgress from "../../src/components/RenderDocumentProgress";

const props = {
  icon: <FaFilePdf />,
  text: "text",
  timestamp: "10:20",
  cancelUpload: jest.fn(),
  downloadFile: jest.fn(),
  caption: "test",
};

describe("render correctly render document progress components", () => {
  test("renders if progress is 100", () => {
    const wrapper = shallow(
      <RenderDocumentProgress {...props} progressUpload={100} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("renders if progress > 0", () => {
    const wrapper = shallow(
      <RenderDocumentProgress {...props} progressUpload={80} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
