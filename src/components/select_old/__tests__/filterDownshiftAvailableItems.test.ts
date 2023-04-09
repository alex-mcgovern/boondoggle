import { filterDownshiftAvailableItems } from "../utils/filterDownshiftAvailableItems";

test("Given no selected items, and empty string as inputValue, returns all items", () => {
  expect(
    filterDownshiftAvailableItems({
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
      inputValue: "",
    })
  ).toStrictEqual([
    { value: "foo", label: "foo" },
    { value: "bar", label: "bar" },
    { value: "bob", label: "bob" },
    { value: "alice", label: "alice" },
  ]);
});

test("Given no selected items, and undefined as inputValue, returns all items", () => {
  expect(
    filterDownshiftAvailableItems({
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
      inputValue: undefined,
    })
  ).toStrictEqual([
    { value: "foo", label: "foo" },
    { value: "bar", label: "bar" },
    { value: "bob", label: "bob" },
    { value: "alice", label: "alice" },
  ]);
});

test("Given no selected items, and inputValue, returns only items matching inputValue", () => {
  expect(
    filterDownshiftAvailableItems({
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
      inputValue: "foo",
    })
  ).toStrictEqual([{ value: "foo", label: "foo" }]);
});
