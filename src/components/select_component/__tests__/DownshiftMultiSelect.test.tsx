/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../test/renderTestComponent";
import type { SelectMultiFilterableProps } from "../SelectMultiFilterable";
import { SelectMultiFilterable } from "../SelectMultiFilterable";

afterEach(cleanup);

test("Renders without error", async () => {
  const { getByTestId } = renderTestComponent<SelectMultiFilterableProps>(
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
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
  expect(getByTestId("tested-component")).toMatchSnapshot();
});
