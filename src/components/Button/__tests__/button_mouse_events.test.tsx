/** @jest-environment jsdom */
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderTestComponent } from "../../../../../../test/renderTestComponent";
import type { ButtonProps } from "../index";
import { Button } from "../index";

afterEach(cleanup);

/**
 * ONCLICK EVENTS
 */

describe("onClick events", () => {
  test("Given an enabled button, when clicking, it should call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" onClick={onClick} />
    );

    (component as HTMLButtonElement).click();
    expect(onClick).toHaveBeenCalled();
  });

  test("Given a disabled button, when clicking, it should not call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        disabled
        onClick={onClick}
      />
    );

    (component as HTMLButtonElement).click();
    expect(onClick).not.toHaveBeenCalled();
  });
});

/**
 * MOUSEOVER EVENTS
 */

describe("mouseOver events", () => {
  test("Given an enabled button, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        onMouseOver={onMouseOver}
      />
    );

    fireEvent.mouseEnter(component as HTMLButtonElement);
    expect(onMouseOver).toHaveBeenCalled();
  });

  test("Given a disabled button, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        disabled
        onMouseOver={onMouseOver}
      />
    );

    fireEvent.mouseEnter(component as HTMLButtonElement);
    expect(onMouseOver).toHaveBeenCalled();
  });
});

/**
 * MOUSELEAVE EVENTS
 */

describe("mouseLeave events", () => {
  test("Given an enabled button, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLButtonElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("Given a disabled button, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="accent"
        disabled
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLButtonElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });
});
