/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { SelectMultiFilterable } from "../SelectMultiFilterable";

import type { SelectMultiFilterableProps } from "../SelectMultiFilterable";

afterEach(cleanup);

test("When user uses keyboard to select and deselect an item, should call `onChange` with correct values each time", async () => {
  const onChange = jest.fn();

  /** ToDo: Fix input focus test */
  const {
    user,
    // getByRole
  } = renderTestComponent<SelectMultiFilterableProps>(
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
      onValueChange={onChange}
    />
  );

  // const input = getByRole("textbox");

  /**
   * Focus element with keyboard
   */

  await user.tab();
  // expect(input as HTMLInputElement).toHaveFocus();

  /**
   * Select an item with keyboard
   */

  await user.keyboard("[ArrowDown]");
  await user.keyboard("[Enter]");

  expect(onChange).toHaveBeenCalledWith([{ value: "foo", label: "foo" }]);

  /**
   * De-select same item
   */

  // await user.keyboard("[ArrowDown]");
  await user.keyboard("[Enter]");

  expect(onChange).toHaveBeenCalledWith([]);
});
