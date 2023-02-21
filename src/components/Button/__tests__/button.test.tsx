/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../test/renderTestComponent";
import type { ButtonProps } from "../index";
import { Button } from "../index";

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
