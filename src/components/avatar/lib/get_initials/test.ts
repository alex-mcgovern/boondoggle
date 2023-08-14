import { getInitials } from ".";

test("getInitials", () => {
  expect(getInitials({ fullName: "Alex McGovern Smith" })).toBe("AM");
  expect(getInitials({ firstName: "Alex", lastName: "McGovern" })).toBe("AM");
  expect(getInitials({ firstName: "Alex" })).toBe("A");
  expect(getInitials({ lastName: "McGovern" })).toBe("M");
  expect(getInitials({})).toBe("");
});
