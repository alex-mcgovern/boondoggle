/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { LOREM } from "../../../mocks/LOREM.mock";
import { Link } from "../../../test/link.component.mock";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { getTheme } from "../../styles/theme.css";
import { Icon } from "../icon";
import { Button } from "./button.component";
import { getButtonStyles } from "./button.styles.css";

describe("<Button />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).not.toBeNull();
    });

    it("should render text passed as children", () => {
      const { getByText } = render(
        <Button id="button" name="Test button">
          {LOREM.button_text}
        </Button>
      );

      expect(getByText(LOREM.button_text)).not.toBeNull();
    });
  });

  /** -----------------------------------------------------------------------------
   * a11y labelling
   * ----------------------------------------------------------------------------- */

  describe("a11y labelling", () => {
    it("Given a button, when an id is provided, should assign it to the button html element", () => {
      const { getByRole } = render(
        <Button id="button-test-id" name="Test button" />
      );

      expect(getByRole("button")?.id).toBe("button-test-id");
    });

    it("Given a button, when a name is provided, should assign it to the button html element", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect((getByRole("button") as HTMLButtonElement)?.name).toBe(
        "Test button"
      );
    });

    it("Given a button, when a tabIndex is provided, should assign it to the button html element", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" tabIndex={0} />
      );

      expect(getByRole("button")?.tabIndex).toBe(0);
    });
  });

  /** -----------------------------------------------------------------------------
   * as prop (polymorphism)
   * ----------------------------------------------------------------------------- */

  describe("as prop (polymorphism)", () => {
    it("should render a button element by default", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).not.toBeNull();
    });

    it("should render a button element when as = `button`", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" as="button" />
      );

      expect(getByRole("button")).not.toBeNull();
    });

    it("should render a link element when as = `a`", () => {
      const { getByRole } = render(
        <Button
          id="button"
          name="Test button"
          as="a"
          href="https://www.google.com"
        >
          {LOREM.link_text}
        </Button>
      );

      expect(getByRole("link")).not.toBeNull();
    });

    it("should render a link element when as = `Link`", () => {
      const { getByRole } = render(
        <Button
          id="button"
          href="https://www.google.com"
          name="Test button"
          as={Link}
        >
          {LOREM.link_text}
        </Button>
      );

      expect(getByRole("link")).not.toBeNull();
    });
  });

  /** -----------------------------------------------------------------------------
   * `appearance` prop
   * ----------------------------------------------------------------------------- */

  describe("`appearance` prop", () => {
    it("should have the primary class name by default", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).toHaveClass(
        getButtonStyles({ appearance: "primary" })
      );
    });

    it("should have the primary class name when appearance = primary", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" appearance="primary" />
      );

      expect(getByRole("button")).toHaveClass(
        getButtonStyles({ appearance: "primary" })
      );
    });

    it("should have the secondary class name when appearance = secondary", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" appearance="secondary" />
      );

      expect(getByRole("button")).toHaveClass(
        getButtonStyles({ appearance: "secondary" })
      );
    });

    it("should have the tertiary class name when appearance = tertiary", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" appearance="tertiary" />
      );

      expect(getByRole("button")).toHaveClass(
        getButtonStyles({ appearance: "tertiary" })
      );
    });
  });

  /** -----------------------------------------------------------------------------
   * `color` prop
   * ------------------------------------------------------------------------------- */

  describe("`color` prop", () => {
    it("should have the bad color class name when color = bad", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" intent="bad" />
      );

      expect(getByRole("button")).toHaveClass(getTheme({ intent: "bad" }));
    });

    it("should have the good color class name when color = good", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" intent="good" />
      );

      expect(getByRole("button")).toHaveClass(getTheme({ intent: "good" }));
    });
  });

  /** -----------------------------------------------------------------------------
   * `className` prop
   * ------------------------------------------------------------------------------- */

  describe("`className` prop", () => {
    it("should have the classname passed to it", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" className="test-class" />
      );

      expect(getByRole("button")).toHaveClass("test-class");
    });
  });

  /** -----------------------------------------------------------------------------
   * Event handlers
   * ----------------------------------------------------------------------------- */

  describe("Event handlers", () => {
    describe("`onClick`", () => {
      /** ---------------------------------------------
       * onClick
       * ----------------------------------------------- */

      it("should call `onClick` when enabled", async () => {
        const onClick = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" onClick={onClick} />
        );

        await userEvent.click(getByRole("button"));

        expect(onClick).toHaveBeenCalled();
      });

      it("should not call `onClick` when disabled", async () => {
        const onClick = jest.fn();

        const { getByRole } = render(
          <Button id="button" disabled name="Test button" onClick={onClick} />
        );

        await userEvent.click(getByRole("button"));

        expect(onClick).not.toHaveBeenCalled();
      });
    });

    /** ---------------------------------------------
     * onMouseOver
     * ----------------------------------------------- */

    describe("`onMouseOver`", () => {
      it("should call `onMouseOver` when enabled", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" onMouseOver={onMouseOver} />
        );

        fireEvent.mouseEnter(getByRole("button"));

        expect(onMouseOver).toHaveBeenCalled();
      });

      it("should call `onMouseOver` when disabled", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = render(
          <Button
            id="button"
            name="Test button"
            disabled
            onMouseOver={onMouseOver}
          />
        );

        fireEvent.mouseEnter(getByRole("button"));

        expect(onMouseOver).toHaveBeenCalled();
      });
    });

    /** ---------------------------------------------
     *  onMouseLeave
     * ----------------------------------------------- */

    describe("`onMouseLeave`", () => {
      it("should call `onMouseLeave` when enabled", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" onMouseLeave={onMouseLeave} />
        );

        fireEvent.mouseLeave(getByRole("button"));

        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("should call `onMouseLeave` when disabled", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = render(
          <Button
            id="button"
            name="Test button"
            disabled
            onMouseLeave={onMouseLeave}
          />
        );

        fireEvent.mouseLeave(getByRole("button"));

        expect(onMouseLeave).toHaveBeenCalled();
      });
    });

    /** ---------------------------------------------
     * onFocus
     * ----------------------------------------------- */

    describe("`onFocus`", () => {
      it("should call `onFocus` when enabled", () => {
        const onFocus = jest.fn();

        const { getByRole } = render(
          <Button
            id="button"
            name="Test button"
            onFocus={onFocus}
            title="Test button"
            onClick={jest.fn()}
          />
        );

        getByRole("button").focus();

        expect(onFocus).toHaveBeenCalled();
      });

      it("should not call `onFocus` when disabled", () => {
        const onFocus = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" disabled onFocus={onFocus} />
        );

        getByRole("button").focus();

        expect(onFocus).not.toHaveBeenCalled();
      });
    });

    /** ---------------------------------------------
     * onBlur
     * ----------------------------------------------- */

    describe("`onBlur`", () => {
      it("should call `onBlur` when enabled", () => {
        const onBlur = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" onBlur={onBlur} />
        );

        getByRole("button").focus();

        getByRole("button").blur();

        expect(onBlur).toHaveBeenCalled();
      });

      it("should not call `onBlur` when disabled", () => {
        const onBlur = jest.fn();

        const { getByRole } = render(
          <Button id="button" name="Test button" disabled onBlur={onBlur} />
        );

        getByRole("button").focus();

        getByRole("button").blur();

        expect(onBlur).not.toHaveBeenCalled();
      });
    });
  });

  /** -----------------------------------------------------------------------------
   * Size prop
   * ----------------------------------------------------------------------------- */

  describe("`size` prop", () => {
    it("should have the `md` class name by default", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).toHaveClass(globalVariantsUiScale.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="sm" />
      );

      expect(getByRole("button")).toHaveClass(globalVariantsUiScale.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="md" />
      );

      expect(getByRole("button")).toHaveClass(globalVariantsUiScale.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="lg" />
      );

      expect(getByRole("button")).toHaveClass(globalVariantsUiScale.lg);
    });
  });

  /** -----------------------------------------------------------------------------
   * Slot props
   * ----------------------------------------------------------------------------- */

  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = render(
        <Button
          id="button"
          name="Test button"
          slotLeft={<Icon data-testid="icon" icon={faSearch} />}
        />
      );

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = render(
        <Button
          id="button"
          name="Test button"
          slotRight={<Icon data-testid="icon" icon={faSearch} />}
        />
      );

      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
