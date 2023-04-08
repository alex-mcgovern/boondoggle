import { filterDownshiftItemsRemoveInvalid } from "../utils/filterDownshiftItemsRemoveInvalid";

test("Given 1 valid initial selected item, returns that item", () => {
  expect(
    filterDownshiftItemsRemoveInvalid({
      itemsToFilter: [{ value: "foo", label: "foo" }],
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
    })
  ).toStrictEqual([{ value: "foo", label: "foo" }]);
});

test("Given 2 valid initial selected items, returns those items", () => {
  expect(
    filterDownshiftItemsRemoveInvalid({
      itemsToFilter: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
      ],

      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
    })
  ).toStrictEqual([
    { value: "foo", label: "foo" },
    { value: "bar", label: "bar" },
  ]);
});

test("Given 1 invalid initial selected items, returns an empty array", () => {
  expect(
    filterDownshiftItemsRemoveInvalid({
      itemsToFilter: [{ value: "wrong", label: "wrong" }],
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
    })
  ).toStrictEqual([]);
});

test("Given 1 invalid and 1 valid initial selected items, returns an empty array", () => {
  expect(
    filterDownshiftItemsRemoveInvalid({
      itemsToFilter: [
        { value: "wrong", label: "wrong" },
        { value: "foo", label: "foo" },
      ],
      items: [
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ],
    })
  ).toStrictEqual([{ value: "foo", label: "foo" }]);
});
