/** @jest-environment jsdom */
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import type { InputProps } from "..";
import { Input } from "..";
import { renderTestComponent } from "../../../../test/renderTestComponent";

afterEach(cleanup);

/**
 * ONCLICK EVENTS
 */

describe("onClick events", () => {
  test("Given an enabled input, when clicking, it should call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onClick={onClick} />
    );

    (component as HTMLInputElement).click();
    expect(onClick).toHaveBeenCalled();
  });

  test("Given a readonly input,  when clicking, it should call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly onClick={onClick} />
    );

    (component as HTMLInputElement).click();
    expect(onClick).toHaveBeenCalled();
  });

  test("Given a disabled input, when clicking, it should not call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" disabled onClick={onClick} />
    );

    (component as HTMLInputElement).click();
    expect(onClick).not.toHaveBeenCalled();
  });
});

/**
 * MOUSEOVER EVENTS
 */

describe("mouseOver events", () => {
  test("Given an enabled input, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onMouseOver={onMouseOver} />
    );

    fireEvent.mouseEnter(component as HTMLInputElement);
    expect(onMouseOver).toHaveBeenCalled();
  });

  test("Given a readonly input, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" readOnly onMouseOver={onMouseOver} />
    );

    fireEvent.mouseEnter(component as HTMLInputElement);
    expect(onMouseOver).toHaveBeenCalled();
  });

  test("Given a disabled input, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" disabled onMouseOver={onMouseOver} />
    );

    fireEvent.mouseEnter(component as HTMLInputElement);
    expect(onMouseOver).toHaveBeenCalled();
  });
});

/**
 * MOUSELEAVE EVENTS
 */

describe("mouseLeave events", () => {
  test("Given an enabled input, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input id="input" name="Test input" onMouseLeave={onMouseLeave} />
    );

    fireEvent.mouseLeave(component as HTMLInputElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("Given a readonly input, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input
        id="input"
        name="Test input"
        readOnly
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLInputElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("Given a disabled input, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<InputProps>(
      <Input
        id="input"
        name="Test input"
        disabled
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLInputElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });
});
