/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * UPDATING VALUE
 */
describe("Updating input value", () => {
  describe("Uncontrolled version", () => {
    test("Given an input without value, when changing, it should have the new value", async () => {
      const { component, user } = renderTestComponent<InputProps>(
        <Input id="input" name="Test input" />
      );

      expect((component as HTMLInputElement)?.value).toBe("");
      await user.type(component as HTMLInputElement, "New value");
      expect((component as HTMLInputElement)?.value).toBe("New value");
    });

    test("Given an input with a value, when changing, it should have the new value", async () => {
      const { component, user } = renderTestComponent<InputProps>(
        <Input id="input" name="Test input" defaultValue="Old value" />
      );

      expect((component as HTMLInputElement)?.value).toBe("Old value");
      await user.clear(component as HTMLInputElement);
      await user.type(component as HTMLInputElement, "New value");
      expect((component as HTMLInputElement)?.value).toBe("New value");
    });

    test("Given an input without value, when changing, it twice should have the right value each time", async () => {
      const { component, user } = renderTestComponent<InputProps>(
        <Input id="input" name="Test input" />
      );

      expect((component as HTMLInputElement)?.value).toBe("");

      await user.clear(component as HTMLInputElement);
      await user.type(component as HTMLInputElement, "New value");
      expect((component as HTMLInputElement)?.value).toBe("New value");

      await user.clear(component as HTMLInputElement);
      await user.type(component as HTMLInputElement, "New value updated");
      expect((component as HTMLInputElement)?.value).toBe("New value updated");
    });
  });

  describe("Controlled version", () => {
    test("Given an input without value, when changing, it should trigger onChange callback", async () => {
      const onChange = jest.fn();

      const { component, user } = renderTestComponent<InputProps>(
        <Input id="input" name="Test input" onChange={onChange} value="" />
      );

      expect(onChange).toHaveBeenCalledTimes(0);

      await user.clear(component as HTMLInputElement);
      await user.type(component as HTMLInputElement, "New value");
      expect(onChange).toHaveBeenCalled();
    });

    test("Given an input with a value, when changing, it should trigger onChange callback", async () => {
      const onChange = jest.fn();

      const { component, user } = renderTestComponent<InputProps>(
        <Input
          id="input"
          name="Test input"
          onChange={onChange}
          value="Old value"
        />
      );

      expect(onChange).toHaveBeenCalledTimes(0);
      await user.type(component as HTMLInputElement, "New value");
      expect(onChange).toHaveBeenCalled();
    });
  });
});

/**
 * ONCHANGE HANDLING
 */

describe("onChange handling", () => {
  test("Given an enabled input, when changing, it should call onChange", async () => {
    const onChange = jest.fn();

    const { component, user } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onChange={onChange} />
    );

    await user.type(component as HTMLInputElement, "New value");
    expect(onChange).toHaveBeenCalled();
  });

  test("Given a readonly input, when changing, it should not call onChange", async () => {
    const onChange = jest.fn();

    const { component, user } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly onChange={onChange} />
    );

    await user.type(component as HTMLInputElement, "New value");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("Given a disabled input, when changing, it should not call onChange", async () => {
    const onChange = jest.fn();

    const { component, user } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" disabled onChange={onChange} />
    );

    await user.type(component as HTMLInputElement, "New value");
    expect(onChange).not.toHaveBeenCalled();
  });
});
