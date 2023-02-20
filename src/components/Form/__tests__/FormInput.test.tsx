/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";
import { FormInput, FormInputProps } from "../components/FormInput";
import { FormTestProvider } from "../components/TestFormProvider";

afterEach(cleanup);

/**
 * UPDATING VALUE
 */

test("Given required props, renders without errors", async () => {
  const { component } = renderTestComponent<FormInputProps>(
    <FormTestProvider>
      <FormInput
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
