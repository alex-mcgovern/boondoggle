import { filterSelectItems } from "./filterSelectItems";

test.skip("Given no selected items, and empty string as inputValue, returns all items", () => {
    expect(
        filterSelectItems({
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
        filterSelectItems({
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
        filterSelectItems({
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
