/** @jest-environment jsdom */
import { cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import { renderTestComponent } from "../../../../test/renderTestComponent";
import { Input } from "../input.component";

import type { InputProps } from "../input.component";

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

describe("Renders Fontawesome icons", () => {
  test.skip("When a leading icon is provided, should render an input with this adornment", () => {
    const { getByRole } = renderTestComponent<InputProps>();
    // <Input id="input" name="Test input" slotLeft={faSearch} />

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });

  test.skip("When an trailing icon is provided, should render an input with this adornment", () => {
    const { getByRole } = renderTestComponent<InputProps>();
    // <Input id="input" name="Test input" slotRight={faSearch} />

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });
});

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
