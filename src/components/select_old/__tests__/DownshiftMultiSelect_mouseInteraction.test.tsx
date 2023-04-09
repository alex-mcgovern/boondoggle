/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { SelectMultiFilterable } from "../SelectMultiFilterable";

import type { SelectMultiFilterableProps } from "../SelectMultiFilterable";

afterEach(cleanup);

test("When user selects and deselects an item, should call `onValueChange` with correct values each time", async () => {
  const onValueChange = jest.fn();
  const onSelectItem = jest.fn();

  const { component, user, getByText } =
    renderTestComponent<SelectMultiFilterableProps>(
      <SelectMultiFilterable
        id="test-dropdown"
        items={[
          { value: "foo", label: "foo" },
          { value: "bar", label: "bar" },
          { value: "bob", label: "bob" },
          { value: "alice", label: "alice" },
        ]}
        name="test-dropdown"
        size={undefined}
        onValueChange={onValueChange}
        onSelectItem={onSelectItem}
      />
    );

  /**
   * Select an item
   */

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure onValueChange is called with all selected items
   */
  expect(onValueChange).toHaveBeenCalledWith([{ value: "foo", label: "foo" }]);
  /**
   * Ensure onSelectItem is called with current selected item
   */
  expect(onSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure onSelectItem is only called once per change
   */
  expect(onSelectItem).toHaveBeenCalledTimes(1);

  /**
   * De-select same item
   */

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure onValueChange is called with all selected items (now an empty array)
   */
  expect(onValueChange).toHaveBeenCalledWith([]);
  /**
   * Ensure onSelectItem is called with current selected item
   */
  expect(onSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure onSelectItem is only called once per change
   */
  expect(onSelectItem).toHaveBeenCalledTimes(2);
});

test("Given an initial input value, when user deselects initial item, should call `onValueChange` with no items", async () => {
  const onValueChange = jest.fn();
  const onSelectItem = jest.fn();

  const { component, user, getByText } =
    renderTestComponent<SelectMultiFilterableProps>(
      <SelectMultiFilterable
        id="test-dropdown"
        initialValue={[{ value: "foo", label: "foo" }]}
        items={[
          { value: "foo", label: "foo" },
          { value: "bar", label: "bar" },
          { value: "bob", label: "bob" },
          { value: "alice", label: "alice" },
        ]}
        name="test-dropdown"
        size={undefined}
        onValueChange={onValueChange}
        onSelectItem={onSelectItem}
      />
    );

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure onValueChange is called with all selected items (now an empty array)
   */
  expect(onValueChange).toHaveBeenCalledWith([]);
  /**
   * Ensure onSelectItem is called with current selected item
   */
  expect(onSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure onSelectItem is only called once per change
   */
  expect(onSelectItem).toHaveBeenCalledTimes(1);
});
