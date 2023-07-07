import { getFilteredDropdownItems } from "../select_utils";

test.skip("Given no selected items, and empty string as inputValue, returns all items", () => {
  expect(
    getFilteredDropdownItems({
      inputValue: "",
      items: [
        { label: "foo", type: "clickable", value: "foo" },
        { label: "bar", type: "clickable", value: "bar" },
        { label: "bob", type: "clickable", value: "bob" },
        { label: "alice", type: "clickable", value: "alice" },
      ],
    })
  ).toStrictEqual([
    { label: "foo", type: "clickable", value: "foo" },
    { label: "bar", type: "clickable", value: "bar" },
    { label: "bob", type: "clickable", value: "bob" },
    { label: "alice", type: "clickable", value: "alice" },
  ]);
});

test.skip("Given no selected items, and undefined as inputValue, returns all items", () => {
  expect(
    getFilteredDropdownItems({
      inputValue: undefined,
      items: [
        { label: "foo", type: "clickable", value: "foo" },
        { label: "bar", type: "clickable", value: "bar" },
        { label: "bob", type: "clickable", value: "bob" },
        { label: "alice", type: "clickable", value: "alice" },
      ],
    })
  ).toStrictEqual([
    { label: "foo", type: "clickable", value: "foo" },
    { label: "bar", type: "clickable", value: "bar" },
    { label: "bob", type: "clickable", value: "bob" },
    { label: "alice", type: "clickable", value: "alice" },
  ]);
});

test.skip("Given no selected items, and inputValue, returns only items matching inputValue", () => {
  expect(
    getFilteredDropdownItems({
      inputValue: "foo",
      items: [
        { label: "foo", type: "clickable", value: "foo" },
        { label: "bar", type: "clickable", value: "bar" },
        { label: "bob", type: "clickable", value: "bob" },
        { label: "alice", type: "clickable", value: "alice" },
      ],
    })
  ).toStrictEqual([{ label: "foo", type: "clickable", value: "foo" }]);
});
