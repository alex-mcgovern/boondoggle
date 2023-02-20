/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * RENDERS CORRECTLY
 */

describe("Renders correctly", () => {
  test("Renders without error", () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" />
    );

    expect(component).not.toBeNull();
  });

  test("When a placeholder is provided, should render an input with this placeholder", () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" placeholder="Placeholder" />
    );

    expect((component as HTMLInputElement)?.placeholder).toBe("Placeholder");
  });
});
