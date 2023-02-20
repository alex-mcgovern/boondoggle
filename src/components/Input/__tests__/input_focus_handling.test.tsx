/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * ONFOCUS EVENTS
 */

describe("onFocus events", () => {
  test("Given an enabled input, when focusing, it should call onFocus", () => {
    const onFocus = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onFocus={onFocus} />
    );

    (component as HTMLInputElement).focus();
    expect(onFocus).toHaveBeenCalled();
  });

  test("Given a readonly input, when focusing, it should call onFocus", () => {
    const onFocus = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly onFocus={onFocus} />
    );

    (component as HTMLInputElement).focus();
    expect(onFocus).toHaveBeenCalled();
  });

  test("Given a disabled input, when focusing, it should not call onFocus", () => {
    const onFocus = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" disabled onFocus={onFocus} />
    );

    (component as HTMLInputElement).focus();
    expect(onFocus).not.toHaveBeenCalled();
  });
  /**
   * CURRENTLY UNSUPPORTED BEHAVIOR FROM PRISMA V3
   */

  test.skip("Given an enabled input, when focusing, it should select the current value", () => {
    const value = "My value";

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" value={value} />
    );

    (component as HTMLInputElement).focus();

    expect((component as HTMLInputElement)?.selectionStart).toBe(0);
    expect((component as HTMLInputElement)?.selectionEnd).toBe(value.length);
  });

  test.skip("Given a readonly input, when focusing, it should select the current value", () => {
    const value = "My value";
    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly value={value} />
    );

    (component as HTMLInputElement).focus();

    expect((component as HTMLInputElement)?.selectionStart).toBe(0);
    expect((component as HTMLInputElement)?.selectionEnd).toBe(value.length);
  });
});

/**
 * ONBLUR EVENTS
 */

describe("onBlur events", () => {
  test("Given an enabled input, when blurring, it should call onBlur", () => {
    const onBlur = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onBlur={onBlur} />
    );
    (component as HTMLInputElement).focus();
    (component as HTMLInputElement).blur();
    expect(onBlur).toHaveBeenCalled();
  });

  test("Given a readonly input, when blurring, it should call onBlur", () => {
    const onBlur = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly onBlur={onBlur} />
    );
    (component as HTMLInputElement).focus();
    (component as HTMLInputElement).blur();
    expect(onBlur).toHaveBeenCalled();
  });

  test("Given a disabled input, when blurring, it should not call onBlur", () => {
    const onBlur = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" disabled onBlur={onBlur} />
    );

    (component as HTMLInputElement).focus();
    (component as HTMLInputElement).blur();
    expect(onBlur).not.toHaveBeenCalled();
  });
});
