import {
  convertNewMessages,
  removeLastMessages,
} from "../../src/utils/messages";

describe("Convert newMessages tests", () => {
  test("should convert last messages", () => {
    const messageList = [
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Hari ini",
      },
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Kemarin",
      },
    ];
    const newMessage = {
      payload: {},
      message: "test",
      type: "text",
      timestamp: "2020-11-18T08:10:16Z",
    };
    const newMessageList = [
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
          {
            payload: {},
            message: "test",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Hari ini",
      },
      {
        data: [
          {
            payload: {},
            message: "testA",
            type: "text",
            timestamp: "2020-11-18T08:10:16Z",
          },
        ],
        date: "Kemarin",
      },
    ];
    expect(convertNewMessages(messageList, newMessage)).toStrictEqual(
      newMessageList
    );
  });
});

// describe("remove newMessages tests", () => {
//   test("should remove last messages", () => {
//     const messageList = [
//       {
//         data: [
//           {
//             payload: {},
//             message: "testA",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//           {
//             payload: {},
//             message: "test",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//         ],
//         date: "Hari ini",
//       },
//       {
//         data: [
//           {
//             payload: {},
//             message: "testA",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//         ],
//         date: "Kemarin",
//       },
//     ];
//     const newMessageList = [
//       {
//         data: [
//           {
//             payload: {},
//             message: "testA",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//           {
//             payload: {},
//             message: "test",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//         ],
//         date: "Hari ini",
//       },
//       {
//         data: [
//           {
//             payload: {},
//             message: "testA",
//             type: "text",
//             timestamp: "2020-11-18T08:10:16Z",
//           },
//         ],
//         date: "Kemarin",
//       },
//     ];

//     expect(removeLastMessages(messageList)).toStrictEqual(newMessageList);
//   });
// });
