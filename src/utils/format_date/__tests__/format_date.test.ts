import { formatDate } from "..";

test("formatDate()", () => {
  /** ---------------------------------------------
   * Happy path
   * ----------------------------------------------- */

  expect(formatDate("2023-05-01T08:56:43Z")).toBe("01/05/2023");
  expect(formatDate("2023-05-01")).toBe("01/05/2023");

  /** ---------------------------------------------
   * Unhappy path
   * ----------------------------------------------- */

  expect(formatDate("not a date")).toBe("Invalid Date");
  expect(formatDate(undefined)).toBe(undefined);
  expect(formatDate("")).toBe(undefined);
  // @ts-expect-error object is not a string
  expect(formatDate({})).toBe("Invalid Date");
  // @ts-expect-error null is not a string
  expect(formatDate(null)).toBe(undefined);
});
