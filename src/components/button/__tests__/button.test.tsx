/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Link } from "../../../../test/link.comp.mock";
import { elementSize } from "../../../styles/common/element_size.css";
import { variantColorOverlay } from "../../../styles/theme.css";
import { Icon } from "../../icon";
import { Button } from "../button.comp";
import { getButtonStyles } from "../button.styles.css";

describe("<Button />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).not.toBeNull();
    });

    it("should render text passed as children", () => {
      const { getByText } = render(
        <Button id="button" name="Test button">
          {LOREM.button}
        </Button>
      );

      expect(getByText(LOREM.button)).not.toBeNull();
    });
  });

  describe("a11y labelling", () => {
    it("Given a button, when an id is provided, should assign it to the element", () => {
      const { getByRole } = render(
        <Button id="button-test-id" name="Test button" />
      );

      expect(getByRole("button")?.id).toBe("button-test-id");
    });

    it("Given a button, when a name is provided, should assign it to the element", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect((getByRole("button") as HTMLButtonElement)?.name).toBe(
        "Test button"
      );
    });

    it("Given a button, when a tabIndex is provided, should assign it to the element", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" tabIndex={0} />
      );

      expect(getByRole("button")?.tabIndex).toBe(0);
    });
  });

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
        <Button name="Test button" as="a" href="https://www.google.com">
          {LOREM.link}
        </Button>
      );

      expect(getByRole("link")).not.toBeNull();
    });

    it("should render a link element when as = `Link`", () => {
      const { getByRole } = render(
        <Button href="https://www.google.com" name="Test button" as={Link}>
          {LOREM.link}
        </Button>
      );

      expect(getByRole("link")).not.toBeNull();
    });
  });

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

  describe("`color` prop", () => {
    it("should have the correct class name when colorOverlay = blue", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" colorOverlay="blue" />
      );

      expect(getByRole("button")).toHaveClass(variantColorOverlay.blue);
    });

    it("should have the correct class name when colorOverlay = amber", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" colorOverlay="amber" />
      );

      expect(getByRole("button")).toHaveClass(variantColorOverlay.amber);
    });

    it("should have the correct class name when colorOverlay = red", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" colorOverlay="red" />
      );

      expect(getByRole("button")).toHaveClass(variantColorOverlay.red);
    });

    it("should have the correct class name name when colorOverlay = green", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" colorOverlay="green" />
      );

      expect(getByRole("button")).toHaveClass(variantColorOverlay.green);
    });
  });

  describe("`className` prop", () => {
    it("should have the classname passed to it", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" className="test-class" />
      );

      expect(getByRole("button")).toHaveClass("test-class");
    });
  });

  describe("Event handlers", () => {
    describe("`onClick`", () => {
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
          <Button name="Test button" disabled onMouseOver={onMouseOver} />
        );

        fireEvent.mouseEnter(getByRole("button"));

        expect(onMouseOver).toHaveBeenCalled();
      });
    });

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
          <Button name="Test button" disabled onMouseLeave={onMouseLeave} />
        );

        fireEvent.mouseLeave(getByRole("button"));

        expect(onMouseLeave).toHaveBeenCalled();
      });
    });

    describe("`onFocus`", () => {
      it("should call `onFocus` when enabled", () => {
        const onFocus = jest.fn();

        const { getByRole } = render(
          <Button
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

  describe("`size` prop", () => {
    it("should have the `md` class name by default", () => {
      const { getByRole } = render(<Button id="button" name="Test button" />);

      expect(getByRole("button")).toHaveClass(elementSize.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="sm" />
      );

      expect(getByRole("button")).toHaveClass(elementSize.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="md" />
      );

      expect(getByRole("button")).toHaveClass(elementSize.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="lg" />
      );

      expect(getByRole("button")).toHaveClass(elementSize.lg);
    });

    it("should have the `square` class name when size = square", () => {
      const { getByRole } = render(
        <Button id="button" name="Test button" size="square" />
      );

      expect(getByRole("button")).toHaveClass(
        getButtonStyles({ size: "square" })
      );
    });
  });

  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = render(
        <Button
          name="Test button"
          slotLeft={<Icon data-testid="icon" icon={faSearch} />}
        />
      );

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = render(
        <Button
          name="Test button"
          slotRight={<Icon data-testid="icon" icon={faSearch} />}
        />
      );

      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
