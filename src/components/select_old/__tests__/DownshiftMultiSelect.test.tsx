/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { SelectMultiFilterable } from "../SelectMultiFilterable";

import type { SelectMultiFilterableProps } from "../SelectMultiFilterable";

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
