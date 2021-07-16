import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getClientWidget,
  createChatRoom,
  registerUser,
  loadMessages,
  postMessages,
  uploadImage,
  createRating,
  logoutUser,
  getRecomendationMessages,
  autoResponder,
} from "../../src/services/mainServices";
import MockAdapter from "axios-mock-adapter";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("fetch main services api", () => {
  it("successfully get client data API", (done) => {
    const mock = new MockAdapter(axios);
    const data = {
      clientUrl: "koperansel.com",
      createdAt: "2020-09-08T14:45:55.023Z",
      hexColor: "#CA1234",
      id: 8,
      key: "86433fc2e8e713ad1c65626f902c0d4ade0b6955",
      logo:
        "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
      name: "PT Koperansel Indonesia",
      phone: "+6281345996034",
      updatedAt: "2020-09-08T14:45:55.023Z",
    };
    mock
      .onGet(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/86433fc2e8e713ad1c65626f902c0d4ade0b6955`
      )
      .reply(200, data);

    getClientWidget("86433fc2e8e713ad1c65626f902c0d4ade0b6955").then(
      (response) => {
        expect(response).toEqual(data);
        done();
      }
    );
  });
  it("successfully create chat room API", (done) => {
    const mock = new MockAdapter(axios);
    const data = {
      timestamp: "2020-09-17 10:06:40",
      success: true,
      code: 200,
      message: "Success create rooms.",
      payload: {
        uniqueRoomId: 22685381,
        users: [
          {
            fullname: "Arief Luthfi",
            avatar_url:
              "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
            phone_number: "+6281345996034",
          },
          {
            fullname: "Client Koperansel",
            avatar_url:
              "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
            phone_number: "+6285608849965",
          },
        ],
        uniqueId: "4ed4fcc943c8a11a784907962eadbbdf",
        created_at: "2020-08-25T07:12:37.550Z",
        updated_at: "2020-08-25T07:12:37.550Z",
        chat_name: "Arief Luthfi",
      },
    };
    const inputdata = {
      unique_user_id: "user_615cd67c66e91deb5536a52b2a612217_bot_36494",
      phone_target: "+6281345996034",
    };
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/room`, inputdata)
      .reply(200, data);

    createChatRoom(inputdata).then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });
  it("successfully register user API", (done) => {
    const mock = new MockAdapter(axios);
    const newData = {
      timestamp: "2020-09-17 11:17:09",
      success: true,
      code: 200,
      message: "User successfully validated.",
      payload: {
        email: "",
        fullname: "Koperansel",
        phone_number: "+6285608849965",
        is_new_user: false,
      },
    };
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/loginOrRegister`)
      .reply(200, newData);

    registerUser().then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });
  it("successfully get load messages API", (done) => {
    const mock = new MockAdapter(axios);
    const newData = {
      timestamp: "2020-09-17 11:17:09",
      success: true,
      code: 200,
      message: "User successfully validated.",
      payload: {
        uniqueRoomId: 22685381,
        comment: [
          {
            payload: {},
            message: "😊",
            type: "text",
            timestamp: "2020-09-15T06:30:17Z",
            user: {
              fullname: "Client Koperansel",
              avatar_url:
                "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
              phone_number: "+6285608849965",
            },
            messageUniqueId: "RSyJ2WzBO6l220WqvjWF1600151417",
            id: 389348990,
          },
        ],
      },
    };
    const data = {
      uniqueRoomId: 22685381,
      phone_number: "+6285608849965",
      limit: 0,
    };
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/load_messages`, data)
      .reply(200, newData);

    loadMessages(data).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });
  it("successfully create messages API", (done) => {
    const mock = new MockAdapter(axios);
    const newData = {
      timestamp: "2020-09-17 11:17:09",
      success: true,
      code: 200,
      message: "User successfully validated.",
      payload: {
        uniqueRoomId: 22685381,
        comment: {
          payload: {},
          message: "test",
          type: "text",
          timestamp: "2020-09-17T11:37:34Z",
          user: {
            fullname: "Client Koperansel",
            avatar_url:
              "https://d1edrlpyc25xu0.cloudfront.net/image/upload/t5XWp2PBRt/1510641299-default_user_avatar.png",
            phone_number: "+6285608849965",
          },
          messageUniqueId: "znDFxvVRuCyvk7v3c90u1600342654",
          id: 392598791,
        },
      },
    };
    const data = {
      phone_number: "+6285608849965",
      type: "text",
      message: "test",
      uniqueRoomId: 22685381,
    };
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/messages`, data)
      .reply(200, newData);

    postMessages(data).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });

  it("successfully upload images API", (done) => {
    const mock = new MockAdapter(axios);
    const store = mockStore({});
    const cancelFileUpload = {
      current: jest.fn(),
    };

    const newData = {
      location:
        "http://chataja-widget-be-dev.vsan-apps.playcourt.id/public/ba9234ae-0320-40eb-9f80-167f613839ff.png",
    };
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const data = new FormData();
    data.append("file", file);
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/upload`, data)
      .reply(200, newData);

    store.dispatch(uploadImage(data, cancelFileUpload)).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });

  it("successfully create rating API", (done) => {
    const mock = new MockAdapter(axios);
    const newData = {
      rate: 4.6,
      uniqueUserId: "user_615cd67c66e91deb5536a52b2a612217_bot_36494",
      client: {
        id: 8,
        name: "PT Koperansel Indonesia",
        key: "86433fc2e8e713ad1c65626f902c0d4ade0b6955",
        clientUrl: "koperansel.com",
        hexColor: "#CA1234",
        phone: "+6281345996034",
        logo:
          "https://chatwidget-chataja.s3.ap-southeast-1.amazonaws.com/0fcedfb7-1861-42c0-9515-13603ce62901.png",
        createdAt: "2020-09-08T14:45:55.023Z",
        updatedAt: "2020-09-08T14:45:55.023Z",
      },
      id: 11,
    };
    const data = {
      rate: 4.6,
      uniqueUserId: "user_615cd67c66e91deb5536a52b2a612217_bot_36494",
    };
    const key = "86433fc2e8e713ad1c65626f902c0d4ade0b6955";
    mock
      .onPost(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}/rate`,
        data
      )
      .reply(200, newData);

    createRating(data, key).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });

  it("successfully implement logout API", (done) => {
    const mock = new MockAdapter(axios);
    const newData = {
      timestamp: "2020-10-08 06:18:40",
      success: true,
      code: 200,
      message: "Success logout.",
    };
    const data = {
      unique_user_id: "user_615cd67c66e91deb5536a52b2a612217_bot_36494",
    };

    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/logoutUser`, data)
      .reply(200, newData);

    logoutUser(data).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });

  it("successfully implement get recomendation messages", (done) => {
    const mock = new MockAdapter(axios);
    const newData = [
      {
        id: 2,
        message: "qwerty",
        clientId: 93,
        createdAt: "2021-04-01T04:54:08.482Z",
        updatedAt: "2021-04-01T04:54:18.919Z",
      },
    ];
    const key = "86433fc2e8e713ad1c65626f902c0d4ade0b6955";
    mock
      .onGet(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}/recomendMessage`
      )
      .reply(200, newData);

    getRecomendationMessages(key).then((response) => {
      expect(response).toEqual(newData);
      done();
    });
  });

  it("successfully implement hit auto responder", (done) => {
    const mock = new MockAdapter(axios);
    const results = undefined;
    const data = {
      unique_user_id: "user_dac9f77df4b5905f11df15b113383f60_bot_36494",
      uniqueRoomId: 41252236,
    };
    const key = "86433fc2e8e713ad1c65626f902c0d4ade0b6955";
    mock
      .onPost(`${process.env.REACT_APP_MAIN}/api/auto_responder/${key}`, data)
      .reply(200);

    autoResponder(data, key).then((response) => {
      expect(response).toEqual(results);
      done();
    });
  });
});