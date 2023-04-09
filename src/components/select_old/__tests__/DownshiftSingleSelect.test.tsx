/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { SelectSingle } from "../select_single.component";

import type { SelectSingleProps } from "../select_single.component";

afterEach(cleanup);

test("Renders without error", async () => {
  const { getByTestId } = renderTestComponent<SelectSingleProps>(
    <SelectSingle
      id="test-dropdown"
      placeholder="Foo bar"
      initialValue={{ value: "foo", label: "foo" }}
      items={[
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ]}
      name="test-dropdown"
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
  expect(getByTestId("tested-component")).toMatchSnapshot();
});

test("When user selects an item, should call `onChange` correctly", async () => {
  const onChange = jest.fn();

  const { component, user, getByText } = renderTestComponent<SelectSingleProps>(
    <SelectSingle
      id="test-dropdown"
      initialValue={{ value: "foo", label: "foo" }}
      placeholder="Foo bar"
      items={[
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ]}
      name="test-dropdown"
      onValueChange={onChange}
    />
  );

  await user.click(component as HTMLDivElement);

  await user.click(getByText("bar"));

  expect(onChange).toHaveBeenCalledWith({ value: "bar", label: "bar" });
});
