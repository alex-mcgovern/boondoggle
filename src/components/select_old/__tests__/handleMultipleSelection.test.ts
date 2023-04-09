/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";

import { handleMultipleSelection } from "../utils/handleMultipleSelection";

afterEach(cleanup);

test("When called with an already selected item, removes it from `selectedItems`", () => {
  expect(
    handleMultipleSelection({
      newSelectedItem: { value: "foo", label: "foo" },
      isItemSelected: true,
      selectedItems: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
      ],
    })
  ).toStrictEqual([{ value: "bar", label: "bar" }]);
});
test("When called with a new item, adds it to `selectedItems`", () => {
  expect(
    handleMultipleSelection({
      newSelectedItem: { value: "new", label: "new" },
      isItemSelected: false,
      selectedItems: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
      ],
    })
  ).toStrictEqual([
    { value: "foo", label: "foo" },
    { value: "bar", label: "bar" },
    { value: "new", label: "new" },
  ]);
});
