/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { Button } from "../Button";

import type { ButtonProps } from "../Button";

afterEach(cleanup);

describe("Renders correctly", () => {
  test("Renders without error", () => {
    const { getByTestId } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" />
    );

    expect(getByTestId("tested-component")).not.toBeNull();
  });

  test("Renders child text correctly", () => {
    const { getByText } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent">
        Test text
      </Button>
    );

    expect(getByText("Test text")).not.toBeNull();
  });
});
