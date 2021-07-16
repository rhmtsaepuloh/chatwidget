/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";

import Rating from "../../src/components/Rating";

const props = {
  onCreateRating: jest.fn(),
  onSkipRating: jest.fn(),
  ratingChanged: jest.fn(),
  dataClient: {
    hexColor: "#000",
    logo:
      "https://www.majalahict.com/wp-content/uploads/2020/05/Logo-ChatAja.jpg",
  },
  rating: 4,
  content: {
    contentPenutup: {
      textTitle: "Terima Kasih",
      textCaption: "Semoga layanan kami memuaskan",
    },
  },
};

describe("render correctly rating pages components", () => {
  test("conditional renders if rating > 0", () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("conditional renders if rating === 0", () => {
    const rating = 0;
    const wrapper = shallow(<Rating {...props} rating={rating} />);
    expect(wrapper).toMatchSnapshot();
  });
});
