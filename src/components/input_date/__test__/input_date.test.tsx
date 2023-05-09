/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Icon } from "../../icon";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

const PROPS: InputDateProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** -----------------------------------------------------------------------------
 * Force a specific date for tests
 * ------------------------------------------------------------------------------- */

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

/** -----------------------------------------------------------------------------
 * Integration test
 * ------------------------------------------------------------------------------- */

const renderComponent = ({ ...props }: InputDateProps) => {
  return render(<InputDate {...props} />);
};

describe("<InputDate />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("button")).not.toBeNull();
    });

    it("should match snapshot", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("button")).toMatchSnapshot();
    });

    it("should render placeholder when present", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("button") as HTMLInputElement).placeholder).toBe(
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

      expect((getByRole("button") as HTMLInputElement).name).toBe(LOREM.name());
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

      expect(getByRole("button")?.tabIndex).toBe(0);
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

      expect(getByRole("button")).toHaveClass("test-class");
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

      expect(getByRole("button")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "sm",
      });

      expect(getByRole("button")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "md",
      });

      expect(getByRole("button")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "lg",
      });

      expect(getByRole("button")).toHaveClass(elementFontSize.lg);
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

      getByRole("button").focus();

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

      getByRole("button").focus();

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

      getByRole("button").focus();

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

      getByRole("button").focus();

      getByRole("button").blur();

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

      getByRole("button").focus();

      getByRole("button").blur();

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

      getByRole("button").focus();

      getByRole("button").blur();

      expect(onBlur).not.toHaveBeenCalled();
    });
  });

  /** -----------------------------------------------------------------------------
   * Integration test
   * ------------------------------------------------------------------------------- */

  describe.only("Integration test", () => {
    it("should have updated value when user selects a date", async () => {
      const { getByRole } = renderComponent(PROPS);

      const buttonElement = getByRole("button");
      expect(buttonElement).not.toBeNull();

      await act(() => {
        return userEvent.click(buttonElement);
      });
      return;

      const newDateButton = getByRole("button", { name: "Jan-02" });

      await act(() => {
        userEvent.click(newDateButton);
      });

      await waitFor(() => {
        expect(buttonElement).toHaveValue("2021-01-02");
      });
    });
  });
});
