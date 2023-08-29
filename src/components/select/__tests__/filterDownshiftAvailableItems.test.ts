import { filterItems } from "../filterItems";

test.skip("Given no selected items, and empty string as inputValue, returns all items", () => {
  expect(
    filterItems({
      inputValue: "",
      items: [
        { label: "foo", value: "foo" },
        { label: "bar", value: "bar" },
        { label: "bob", value: "bob" },
        { label: "alice", value: "alice" },
      ],
    })
  ).toStrictEqual([
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
    { label: "bob", value: "bob" },
    { label: "alice", value: "alice" },
  ]);
});

test.skip("Given no selected items, and undefined as inputValue, returns all items", () => {
  expect(
    filterItems({
      inputValue: undefined,
      items: [
        { label: "foo", value: "foo" },
        { label: "bar", value: "bar" },
        { label: "bob", value: "bob" },
        { label: "alice", value: "alice" },
      ],
    })
  ).toStrictEqual([
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
    { label: "bob", value: "bob" },
    { label: "alice", value: "alice" },
  ]);
});

test.skip("Given no selected items, and inputValue, returns only items matching inputValue", () => {
  expect(
    filterItems({
      inputValue: "foo",
      items: [
        { label: "foo", value: "foo" },
        { label: "bar", value: "bar" },
        { label: "bob", value: "bob" },
        { label: "alice", value: "alice" },
      ],
    })
  ).toStrictEqual([{ label: "foo", value: "foo" }]);
});
