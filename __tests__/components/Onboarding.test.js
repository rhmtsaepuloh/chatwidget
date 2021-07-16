/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import Onboarding from "../../src/components/Onboarding";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("render correctly onboarding components", () => {
  test("renders", () => {
    const dataClient = {
      hexColor: "#CA1234",
      logo:
        "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
    };
    const content = {
      contentOpening: {
        textHeader: "ChatAja Widget",
        textJudul: "ChatAja",
        textCaption:
          "Kamu dapat menanyakan apa saja kepada customer service hanya dengan chat...",
        textTombol: "Mulai Chat",
      },
    };
    const wrapper = shallow(
      <Onboarding dataClient={dataClient} content={content} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
