/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { globalVariantsUiScale } from "../../../styles/common/globalVariantsUiScale.css";
import { Icon } from "../../icon";
import { Input } from "../input.component";

afterEach(cleanup);

describe("<Input />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = render(
        <Input placeholder="Placeholder" id="input" name="Test input" />
      );
      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should render placeholder when present", () => {
      const { getByRole } = render(
        <Input placeholder="Placeholder" id="input" name="Test input" />
      );
      expect((getByRole("textbox") as HTMLInputElement)?.placeholder).toBe(
        "Placeholder"
      );
    });
  });

  /**
   * a11y labelling
   */
  describe("a11y labelling", () => {
    it("should assign id to the input element", () => {
      const { getByRole } = render(
        <Input placeholder="Placeholder" id="input-test-id" name="Test input" />
      );
      expect(getByRole("textbox")?.id).toBe("input-test-id");
    });

    it("should assign name to the input element", () => {
      const { getByRole } = render(
        <Input placeholder="Placeholder" id="input" name="Test input" />
      );
      expect((getByRole("textbox") as HTMLInputElement)?.name).toBe(
        "Test input"
      );
    });

    it("should assign tabIndex to the input html element", () => {
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          tabIndex={0}
        />
      );
      expect(getByRole("textbox")?.tabIndex).toBe(0);
    });
  });

  /**
   * `className` prop
   */
  describe("`className` prop", () => {
    it("should have the classname passed to it", () => {
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          className="test-class"
        />
      );
      expect(getByRole("textbox")).toHaveClass("test-class");
    });
  });

  /**
   * Event handlers
   */
  describe("Even handlers", () => {
    describe("handling updates to value", () => {
      describe("when uncontrolled", () => {
        it("should update value when the user types", async () => {
          const { getByRole } = render(
            <Input placeholder="Placeholder" id="input" name="Test input" />
          );
          expect((getByRole("textbox") as HTMLInputElement)?.value).toBe("");
          await userEvent.type(getByRole("textbox"), "New value");
          expect((getByRole("textbox") as HTMLInputElement)?.value).toBe(
            "New value"
          );
        });

        it("should update value when the user types when there is `defaultValue`", async () => {
          const { getByRole } = render(
            <Input
              placeholder="Placeholder"
              id="input"
              name="Test input"
              defaultValue="Old value"
            />
          );
          expect((getByRole("textbox") as HTMLInputElement)?.value).toBe(
            "Old value"
          );
          await userEvent.clear(getByRole("textbox"));
          await userEvent.type(getByRole("textbox"), "New value");
          expect((getByRole("textbox") as HTMLInputElement)?.value).toBe(
            "New value"
          );
        });
      });

      describe("when controlled", () => {
        it("should trigger onChange callback when user types when initialised with no value", async () => {
          const onChange = jest.fn();
          const { getByRole } = render(
            <Input
              placeholder="Placeholder"
              id="input"
              name="Test input"
              onChange={onChange}
              value=""
            />
          );
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
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            onChange={onChange}
            value=""
          />
        );
        expect(onChange).toHaveBeenCalledTimes(0);
        await userEvent.clear(getByRole("textbox"));
        await userEvent.type(getByRole("textbox"), "New value");
        expect(onChange).toHaveBeenCalled();
      });

      it("should trigger onChange callback when user types when initialised with a value", async () => {
        const onChange = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            onChange={onChange}
            value="Old value"
          />
        );
        expect(onChange).toHaveBeenCalledTimes(0);
        await userEvent.type(getByRole("textbox"), "New value");
        expect(onChange).toHaveBeenCalled();
      });

      it("should not call onChange when readonly", async () => {
        const onChange = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            readOnly
            onChange={onChange}
          />
        );
        await userEvent.type(getByRole("textbox"), "New value");
        expect(onChange).not.toHaveBeenCalled();
      });

      it("Given a disabled input, when changing, it should not call onChange", async () => {
        const onChange = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            disabled
            onChange={onChange}
          />
        );
        await userEvent.type(getByRole("textbox"), "New value");
        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe("`onClick`", () => {
      it("Given an enabled input, when clicking, it should call onClick", () => {
        const onClick = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            onClick={onClick}
          />
        );
        getByRole("textbox").click();
        expect(onClick).toHaveBeenCalled();
      });

      it("Given a readonly input,  when clicking, it should call onClick", () => {
        const onClick = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            readOnly
            onClick={onClick}
          />
        );
        getByRole("textbox").click();
        expect(onClick).toHaveBeenCalled();
      });

      it("Given a disabled input, when clicking, it should not call onClick", () => {
        const onClick = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            disabled
            onClick={onClick}
          />
        );
        getByRole("textbox").click();
        expect(onClick).not.toHaveBeenCalled();
      });
    });

    describe("mouseOver", () => {
      it("Given an enabled input, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            onMouseOver={onMouseOver}
          />
        );
        fireEvent.mouseEnter(getByRole("textbox"));
        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a readonly input, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            readOnly
            onMouseOver={onMouseOver}
          />
        );
        fireEvent.mouseEnter(getByRole("textbox"));
        expect(onMouseOver).toHaveBeenCalled();
      });

      it("Given a disabled input, when hovering, it should call onMouseOver", () => {
        const onMouseOver = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            disabled
            onMouseOver={onMouseOver}
          />
        );
        fireEvent.mouseEnter(getByRole("textbox"));
        expect(onMouseOver).toHaveBeenCalled();
      });
    });

    describe("`mouseLeave`", () => {
      it("it should call `onMouseLeave` by default", () => {
        const onMouseLeave = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            onMouseLeave={onMouseLeave}
          />
        );
        fireEvent.mouseLeave(getByRole("textbox"));
        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `readonly`", () => {
        const onMouseLeave = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            readOnly
            onMouseLeave={onMouseLeave}
          />
        );
        fireEvent.mouseLeave(getByRole("textbox"));
        expect(onMouseLeave).toHaveBeenCalled();
      });

      it("it should call `onMouseLeave` when `disabled`", () => {
        const onMouseLeave = jest.fn();
        const { getByRole } = render(
          <Input
            placeholder="Placeholder"
            id="input"
            name="Test input"
            disabled
            onMouseLeave={onMouseLeave}
          />
        );
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
      const { getByRole } = render(
        <Input placeholder="Placeholder" id="input" name="Test input" />
      );

      expect(getByRole("textbox")).toHaveClass(globalVariantsUiScale.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          size="sm"
        />
      );
      expect(getByRole("textbox")).toHaveClass(globalVariantsUiScale.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          size="md"
        />
      );
      expect(getByRole("textbox")).toHaveClass(globalVariantsUiScale.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          size="lg"
        />
      );
      expect(getByRole("textbox")).toHaveClass(globalVariantsUiScale.lg);
    });
  });

  /**
   * Slot props
   */
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          slotLeft={<Icon data-testid="icon" icon={faSearch} />}
        />
      );
      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          slotRight={<Icon data-testid="icon" icon={faSearch} />}
        />
      );
      expect(getByTestId("icon")).not.toBeNull();
    });
  });

  /**
   * onFocus events
   */
  describe("`onFocus`", () => {
    it("should call `onFocus` by default", () => {
      const onFocus = jest.fn();
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          onFocus={onFocus}
        />
      );
      getByRole("textbox").focus();
      expect(onFocus).toHaveBeenCalled();
    });

    it("should call `onFocus` when `readonly`", () => {
      const onFocus = jest.fn();
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          readOnly
          onFocus={onFocus}
        />
      );
      getByRole("textbox").focus();
      expect(onFocus).toHaveBeenCalled();
    });

    it("should not call `onFocus` when `disabled`", () => {
      const onFocus = jest.fn();
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          disabled
          onFocus={onFocus}
        />
      );
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
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          onBlur={onBlur}
        />
      );
      (getByRole("textbox") as HTMLInputElement).focus();
      getByRole("textbox").blur();
      expect(onBlur).toHaveBeenCalled();
    });

    it("it should call onBlur when readonly", () => {
      const onBlur = jest.fn();
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          readOnly
          onBlur={onBlur}
        />
      );
      getByRole("textbox").focus();
      getByRole("textbox").blur();
      expect(onBlur).toHaveBeenCalled();
    });

    it("should not call onBlur when disabled", () => {
      const onBlur = jest.fn();
      const { getByRole } = render(
        <Input
          placeholder="Placeholder"
          id="input"
          name="Test input"
          disabled
          onBlur={onBlur}
        />
      );
      getByRole("textbox").focus();
      getByRole("textbox").blur();
      expect(onBlur).not.toHaveBeenCalled();
    });
  });
});
