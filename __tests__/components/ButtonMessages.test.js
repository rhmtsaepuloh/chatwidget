/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { shallow } from "enzyme";
import ButtonMessages from "../../src/components/ButtonMessages";

const props = {
  message: "cek",
  timestamp: "10:02",
  item: {
    id: 420871933,
    message: "cek",
    messageUniqueId: "bzZvNGNu7ezlzTBdPSlE1602126125",
    payload: {
      buttons: [
        { label: "button1", postback_text: "Load more", type: "postback" },
        {
          label: "button1",
          postback_text: "Load more",
          type: "link",
          payload: {
            url: "http://somewhere.com/button2?id=123",
          },
        },
      ],
    },
    timestamp: "10:02",
    type: "text",
    user: {
      avatar_url:
        "https://file-manager.chataja.co.id/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80de9c37cf322d78d2c909ff8f2d4245a2d3256d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9RWVhWMGIxOXZjbWxsYm5SVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9fbd58a8279dfc2b55a934aacd1a224d5bfb00a8/1593483285.png",
      fullname: "user_36d7cf432e381bbf0fb17e7a4fab57af",
      phone_number: null,
      unique_user_id: "user_36d7cf432e381bbf0fb17e7a4",
    },
  },
  onPostBack: jest.fn(),
};

describe("render correctly carousel components", () => {
  test("renders", () => {
    const wrapper = shallow(<ButtonMessages {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
