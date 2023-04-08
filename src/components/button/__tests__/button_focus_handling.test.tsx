/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { Button } from "../Button";

import type { ButtonProps } from "../Button";

afterEach(cleanup);

/**
 * ONFOCUS EVENTS
 */

describe("onFocus events", () => {
  test("Given an enabled button, when focusing, it should call onFocus", () => {
    const onFocus = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        onFocus={onFocus}
        color="accent"
        title="Test button"
        onClick={jest.fn()}
      />
    );

    (component as HTMLButtonElement).focus();
    expect(onFocus).toHaveBeenCalled();
  });

  test("Given a disabled button, when focusing, it should not call onFocus", () => {
    const onFocus = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        disabled
        color="accent"
        onFocus={onFocus}
      />
    );

    (component as HTMLButtonElement).focus();
    expect(onFocus).not.toHaveBeenCalled();
  });
});

/**
 * ONBLUR EVENTS
 */

describe("onBlur events", () => {
  test("Given an enabled button, when blurring, it should call onBlur", () => {
    const onBlur = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" onBlur={onBlur} />
    );
    (component as HTMLButtonElement).focus();
    (component as HTMLButtonElement).blur();
    expect(onBlur).toHaveBeenCalled();
  });

  test("Given a disabled button, when blurring, it should not call onBlur", () => {
    const onBlur = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        disabled
        color="accent"
        onBlur={onBlur}
      />
    );

    (component as HTMLButtonElement).focus();
    (component as HTMLButtonElement).blur();
    expect(onBlur).not.toHaveBeenCalled();
  });
});
