/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { render, waitFor } from "@testing-library/react";

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

const renderComponent = async ({ ...props }: InputDateProps) => {
  return waitFor(() => {
    return render(<InputDate {...props} />);
  });
};

describe("<InputDate />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should match snapshot", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("textbox")).toMatchSnapshot();
    });

    it("should render placeholder when present", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("textbox") as HTMLInputElement).placeholder).toBe(
        LOREM.placeholder()
      );
    });
  });

  /**
   * a11y labelling
   */
  describe("a11y labelling", () => {
    it("should assign name to the element", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("textbox") as HTMLInputElement).name).toBe(
        LOREM.name()
      );
    });

    it("should label element correctly", async () => {
      const { getByLabelText } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        label: LOREM.label(),
        id: LOREM.id(),
      });

      expect(getByLabelText(LOREM.label())).not.toBeNull();
    });

    it("should assign tabIndex to the element", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        tabIndex: 0,
      });

      expect(getByRole("textbox")?.tabIndex).toBe(0);
    });
  });

  /**
   * Size prop
   */
  describe("`size` prop", () => {
    it("should have the `md` class name by default", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "sm",
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        size: "md",
      });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", async () => {
      const { getByRole } = await renderComponent({
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
    it("should render node passed to `slotLeft`", async () => {
      const { getByTestId } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", async () => {
      const { getByTestId } = await renderComponent({
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
    it("should call `onFocus` by default", async () => {
      const onFocus = jest.fn();

      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onFocus,
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should call `onFocus` when `readonly`", async () => {
      const onFocus = jest.fn();

      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        readOnly: true,
        onFocus,
      });

      getByRole("textbox").focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it("should not call `onFocus` when `disabled`", async () => {
      const onFocus = jest.fn();

      const { getByRole } = await renderComponent({
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
    it("it should call onBlur by default", async () => {
      const onBlur = jest.fn();

      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onBlur,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("it should call onBlur when readonly", async () => {
      const onBlur = jest.fn();

      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
        onBlur,
        readOnly: true,
      });

      getByRole("textbox").focus();

      getByRole("textbox").blur();

      expect(onBlur).toHaveBeenCalled();
    });

    it("should not call onBlur when disabled", async () => {
      const onBlur = jest.fn();

      const { getByRole } = await renderComponent({
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
