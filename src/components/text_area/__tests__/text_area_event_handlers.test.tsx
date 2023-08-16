/** @jest-environment jsdom */
import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { TextArea } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { TextAreaProps } from "..";

afterEach(cleanup);

const renderComponent = (props: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
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
            defaultValue: "Old value",
            name: LOREM.name(),
            placeholder: LOREM.placeholder(),
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
            onChange,
            placeholder: LOREM.placeholder(),
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
          onChange,
          placeholder: LOREM.placeholder(),
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
          onChange,
          placeholder: LOREM.placeholder(),
          value: "Old value",
        });

        expect(onChange).toHaveBeenCalledTimes(0);

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).toHaveBeenCalled();
      });

      it("should not call onChange when readOnly", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onChange,
          placeholder: LOREM.placeholder(),
          readOnly: true,
        });

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).not.toHaveBeenCalled();
      });

      it("Given a disabled textarea, when changing, it should not call onChange", async () => {
        const onChange = jest.fn();

        const { getByRole } = renderComponent({
          disabled: true,
          name: LOREM.name(),
          onChange,
          placeholder: LOREM.placeholder(),
        });

        await userEvent.type(getByRole("textbox"), "New value");

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe("`onClick`", () => {
      it("Given an enabled textarea, when clicking, it should call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onClick,
          placeholder: LOREM.placeholder(),
        });

        getByRole("textbox").click();

        expect(onClick).toHaveBeenCalled();
      });

      it("Given a readOnly textarea,  when clicking, it should call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onClick,
          placeholder: LOREM.placeholder(),
          readOnly: true,
        });

        getByRole("textbox").click();

        expect(onClick).toHaveBeenCalled();
      });

      it("Given a disabled textarea, when clicking, it should not call onClick", () => {
        const onClick = jest.fn();

        const { getByRole } = renderComponent({
          disabled: true,
          name: LOREM.name(),
          onClick,
          placeholder: LOREM.placeholder(),
        });

        getByRole("textbox").click();

        expect(onClick).not.toHaveBeenCalled();
      });
    });

    describe("mouseOver", () => {
      it("Given an enabled textarea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onMouseOver,
          placeholder: LOREM.placeholder(),
        });

        fireEvent.mouseEnter(getByRole("textbox"));

        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a readOnly textarea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onMouseOver,
          placeholder: LOREM.placeholder(),
          readOnly: true,
        });

        fireEvent.mouseEnter(getByRole("textbox"));

        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a disabled textarea, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();

        const { getByRole } = renderComponent({
          disabled: true,
          name: LOREM.name(),
          onMouseOver,
          placeholder: LOREM.placeholder(),
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
          onMouseLeave,
          placeholder: LOREM.placeholder(),
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `readOnly`", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = renderComponent({
          name: LOREM.name(),
          onMouseLeave,
          placeholder: LOREM.placeholder(),
          readOnly: true,
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `disabled`", () => {
        const onMouseLeave = jest.fn();

        const { getByRole } = renderComponent({
          disabled: true,
          name: LOREM.name(),
          onMouseLeave,
          placeholder: LOREM.placeholder(),
        });

        fireEvent.mouseLeave(getByRole("textbox"));

        expect(onMouseLeave).toHaveBeenCalled();
      });
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
        onFocus,
        placeholder: LOREM.placeholder(),
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should call `onFocus` when `readOnly`", () => {
      const onFocus = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        onFocus,
        placeholder: LOREM.placeholder(),
        readOnly: true,
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should not call `onFocus` when `disabled`", () => {
      const onFocus = jest.fn();

      const { getByRole } = renderComponent({
        disabled: true,
        name: LOREM.name(),
        onFocus,
        placeholder: LOREM.placeholder(),
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
        onBlur,
        placeholder: LOREM.placeholder(),
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("it should call onBlur when readOnly", () => {
      const onBlur = jest.fn();

      const { getByRole } = renderComponent({
        name: LOREM.name(),
        onBlur,
        placeholder: LOREM.placeholder(),
        readOnly: true,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("should not call onBlur when disabled", () => {
      const onBlur = jest.fn();

      const { getByRole } = renderComponent({
        disabled: true,
        name: LOREM.name(),
        onBlur,
        placeholder: LOREM.placeholder(),
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).not.toHaveBeenCalled();
    });
  });
});
