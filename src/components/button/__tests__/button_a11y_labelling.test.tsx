/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { Button } from "../Button";

import type { ButtonProps } from "../Button";

afterEach(cleanup);

/**
 * A11Y LABELLING
 */

describe("a11y labelling", () => {
  test("Given a button, when an id is provided, should assign it to the button html element", () => {
    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button-test-id" name="Test button" color="accent" />
    );
    expect((component as HTMLButtonElement)?.id).toBe("button-test-id");
  });

  test("Given a button, when a name is provided, should assign it to the button html element", () => {
    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" />
    );
    expect((component as HTMLButtonElement)?.name).toBe("Test button");
  });

  test("Given a button, when a tabIndex is provided, should assign it to the button html element", () => {
    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" tabIndex={0} color="accent" />
    );
    expect((component as HTMLButtonElement)?.tabIndex).toBe(0);
  });
});

/**
 * ARIA ATTRIBUTES
 *
 * Both of these tests fail.
 * ToDo(boondoggle/button): Fix a11y attributes on button
 */

describe.skip("Aria attributes", () => {
  test('Given a button, when disabled, should assign the "aria-disabled" property', () => {
    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" disabled />
    );
    expect(component?.getAttribute("aria-disabled")).toBe("true");
  });

  test.skip('Given a button, when describedBy is provided, should assign the "aria-describedby" property', () => {
    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        // describedBy="describe-by-id"
      />
    );
    expect(component?.getAttribute("aria-describedby")).toBe("describe-by-id");
  });
});
