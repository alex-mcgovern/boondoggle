/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { FormInput } from "../form_input.component";
import { FormTestProvider } from "../form_provider_test.component";

import type { FormInputProps } from "../form_input.component";

afterEach(cleanup);

/**
 * UPDATING VALUE
 */

test("Given required props, renders without errors", async () => {
  const { component } = renderTestComponent<FormInputProps>(
    <FormTestProvider>
      <FormInput
        placeholder="test placeholder"
        id="input"
        name="Test input"
        errorMessage="Error"
        label="test input"
      />
    </FormTestProvider>
  );

  expect(component as HTMLInputElement).not.toBeNull();
});

test("Given required props, matches snapshot", async () => {
  const { component } = renderTestComponent<FormInputProps>(
    <FormTestProvider>
      <FormInput
        placeholder="test placeholder"
        id="input"
        name="Test input"
        errorMessage="Error"
        label="test input"
      />
    </FormTestProvider>
  );

  expect(component as HTMLInputElement).toMatchSnapshot();
});

test("Given an input without value, when changing, it should have the new value", async () => {
  const { user, getByRole } = renderTestComponent<FormInputProps>(
    <FormTestProvider>
      <FormInput
        placeholder="test placeholder"
        id="input"
        name="Test input"
        errorMessage="Error"
        label="test input"
      />
    </FormTestProvider>
  );

  const input = getByRole("textbox") as HTMLInputElement;

  expect(input?.value).toBe("");
  await user.type(input, "New value");
  expect(input?.value).toBe("New value");
});
