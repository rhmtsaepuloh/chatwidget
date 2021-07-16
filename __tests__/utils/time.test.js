import { convertTime, convertDate } from "../../src/utils/time";

describe("ConvertTime tests", () => {
  test("should change time type of string", () => {
    const timestamp = "2020-11-18T08:10:16Z";
    expect(typeof convertTime(timestamp)).toBe("string");
  });
  test("should change time separator : in string  -> ex: 10:00", () => {
    const timestamp = "2020-11-18T09:01:00";
    expect(convertTime(timestamp)).toMatch(/^\w+(\:\w+)*$/);
  });
});

describe("ConvertDate tests", () => {
  test("should date time type of string", () => {
    const timestamp = "2020-11-18T08:10:16Z";
    expect(typeof convertDate(timestamp)).toBe("string");
  });
  test("should date time separator / in string  -> ex: 15/11/2020", () => {
    const timestamp = "2020-11-18T08:10:16Z";
    expect(convertDate(timestamp)).toMatch(/^\w+(\/\w+)*$/);
  });
});
