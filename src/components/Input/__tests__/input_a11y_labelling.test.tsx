/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * ACCESSIBILITY AND LABELLING
 */

describe("Accessibility and labelling", () => {
  test("When an id is provided, should assign it to the input html element", () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input-test-id" name="Test input" />
    );
    expect((component as HTMLInputElement)?.id).toBe("input-test-id");
  });

  test("When a name is provided, should assign it to the input html element", () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" />
    );
    expect((component as HTMLInputElement)?.name).toBe("Test input");
  });

  test("When a tabIndex is provided, should assign it to the input html element", () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" tabIndex={0} />
    );
    expect((component as HTMLInputElement)?.tabIndex).toBe(0);
  });
});

describe("Aria testing", () => {
  test('Given an input When required should assign the "aria-required" property', () => {
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" required />
    );
    expect((component as HTMLInputElement)?.getAttribute("aria-required")).toBe(
      "true"
    );
  });

  test.skip('Given an input When describedBy is provided, should assign the "aria-describedby" property', () => {
    const { component } = renderTestComponent<InputProps>(
      <Input
        id="input"
        name="Test input"
        // describedBy="describe-by-id"
      />
    );
    expect(
      (component as HTMLInputElement)?.getAttribute("aria-describedby")
    ).toBe("describe-by-id");
  });
});
