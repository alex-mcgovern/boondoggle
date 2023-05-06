/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Icon } from "../../icon";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

afterEach(cleanup);

const renderComponent = (props: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should render placeholder when present", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("textbox") as HTMLTextAreaElement).placeholder).toBe(
        LOREM.placeholder()
      );
    });
  });

  /**
   * a11y labelling
   */
  describe("a11y labelling", () => {
    it("should assign name to the element", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("textbox") as HTMLTextAreaElement).name).toBe(
        LOREM.name()
      );
    });

    it("should label element correctly", () => {
      const { getByLabelText } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        label: LOREM.label(),
        id: LOREM.id(),
      });

      expect(getByLabelText(LOREM.label())).not.toBeNull();
    });

    it("should assign tabIndex to the element", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        tabIndex: 0,
      });

      expect(getByRole("textbox")?.tabIndex).toBe(0);
    });
  });

  /**
   * `className` prop
   */
  describe("`className` prop", () => {
    it("should have the className passed to it", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        className: "test-class",
      });

      expect(getByRole("textbox")).toHaveClass("test-class");
    });
  });

  /**
   * Event handlers
   */
  describe("Event handlers", () => {
    describe("handling updates to value", () => {
      describe("when uncontrolled", () => {
        it("should update value when the user types", async () => {
          const { getByRole } = renderComponent({
            name: LOREM.name(),
            placeholder: LOREM.placeholder(),
          });

          expect(getByRole("textbox")).toHaveValue("");

          await userEvent.type(getByRole("textbox"), "New value");

          expect(getByRole("textbox")).toHaveValue("New value");
        });

        it("should update value when the user types when there is `defaultValue`", async () => {
          const { getByRole } = renderComponent({
            name: LOREM.name(),
            placeholder: LOREM.placeholder(),
            defaultValue: "Old value",
          });

          expect(getByRole("textbox")).toHaveValue("Old value");

          await userEvent.clear(getByRole("textbox"));
          await userEvent.type(getByRole("textbox"), "New value");

          expect(getByRole("textbox")).toHaveValue("New value");
        });
      });

      describe("when controlled", () => {
        it("should trigger onChange callback when user types when initialised with no value", async () => {
          const onChange = jest.fn();

          const { getByRole } = renderComponent({
            name: LOREM.name(),
            placeholder: LOREM.placeholder(),
            onChange,
            value: "",
          });

          expect(onChange).toHaveBeenCalledTimes(0);

          await userEvent.clear(getByRole("textbox"));
          await userEvent.type(getByRole("textbox"), "New value");

          expect(onChange).toHaveBeenCalled();
        });
      });
    });

    describe("onChange handling", () => {
      it("should trigger onChange callback when user types", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onChange,
          value: "",
        });

        expect(onChange).toHaveBeenCalledTimes(0);

        await userEvent.clear(getByRole("textbox"));
        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).toHaveBeenCalled();
      });

      it("should trigger onChange callback when user types when initialised with a value", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onChange,
          value: "Old value",
        });

        expect(onChange).toHaveBeenCalledTimes(0);

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).toHaveBeenCalled();
      });

      it("should not call onChange when readonly", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onChange,
          readOnly: true,
        });

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).not.toHaveBeenCalled();
      });

      it("Given a disabled TextArea, when changing, it should not call onChange", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onChange,
          disabled: true,
        });

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe("`onClick`", () => {
      it("Given an enabled TextArea, when clicking, it should call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onClick,
        });

        getByRole("textbox").click();

        expect(onClick).toHaveBeenCalled();
      });

      it("Given a readonly TextArea,  when clicking, it should call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          readOnly: true,
          onClick,
        });

        getByRole("textbox").click();

        expect(onClick).toHaveBeenCalled();
      });

      it("Given a disabled TextArea, when clicking, it should not call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          disabled: true,
          onClick,
        });

        getByRole("textbox").click();

        expect(onClick).not.toHaveBeenCalled();
      });
    });

    describe("mouseOver", () => {
      it("Given an enabled TextArea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onMouseOver,
        });

        fireEvent.mouseEnter(getByRole("textbox"));

        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a readonly TextArea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          readOnly: true,
          onMouseOver,
        });

        fireEvent.mouseEnter(getByRole("textbox"));

        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a disabled TextArea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          disabled: true,
          onMouseOver,
        });

        fireEvent.mouseEnter(getByRole("textbox"));

        expect(onMouseOver).toHaveBeenCalled();
      });
    });

    describe("`mouseLeave`", () => {
      it("it should call `onMouseLeave` by default", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          onMouseLeave,
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `readonly`", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          readOnly: true,
          onMouseLeave,
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `disabled`", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          placeholder: LOREM.placeholder(),
          disabled: true,
          onMouseLeave,
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });
    });
  });

  /**
   * Size prop
   */
  describe("`size` prop", () => {
    it("should have the `md` class name by default", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "sm",
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "md",
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "lg",
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.lg);
    });
  });

  /**
   * Slot props
   */
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        slotRight: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });
  });

  /**
   * onFocus events
   */
  describe("`onFocus`", () => {
    it("should call `onFocus` by default", () => {
      const onFocus = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onFocus,
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should call `onFocus` when `readonly`", () => {
      const onFocus = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        readOnly: true,
        onFocus,
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should not call `onFocus` when `disabled`", () => {
      const onFocus = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        disabled: true,
        onFocus,
      });

      getByRole("textbox").focus();

      expect(onFocus).not.toHaveBeenCalled();
    });
  });

  /**
   * onBlur events
   */
  describe("`onBlur`", () => {
    it("it should call onBlur by default", () => {
      const onBlur = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onBlur,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("it should call onBlur when readonly", () => {
      const onBlur = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onBlur,
        readOnly: true,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("should not call onBlur when disabled", () => {
      const onBlur = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onBlur,
        disabled: true,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).not.toHaveBeenCalled();
    });
  });
});
