/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";

import RecomendationMessages from "../../src/components/RecomendationMessages";

const props = {
  onPostBack: jest.fn(),
  payload: null,
  urlImagePreview: "",
};

describe("render correctly recomendation messages components", () => {
  test("render if recomended data is empty", () => {
    const wrapper = shallow(
      <RecomendationMessages {...props} recomendedData={null} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("render if recomended data not empty", () => {
    const recomendedData = [
      {
        id: 2,
        message: "qwerty",
        clientId: 93,
        createdAt: "2021-04-01T04:54:08.482Z",
        updatedAt: "2021-04-01T04:54:18.919Z",
      },
    ];
    const wrapper = shallow(
      <RecomendationMessages {...props} recomendedData={recomendedData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
