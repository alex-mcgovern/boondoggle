/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { a11yError } from "../../../styles/common/a11y.css";
import { elementSize } from "../../../styles/common/element_size.css";
import { variantIntent } from "../../../styles/theme.css";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectSingleProps } from "..";

const ON_CHANGE = jest.fn();
const ON_IS_OPEN_CHANGE = jest.fn();

const ITEMS = mockSelectItems();
const FIRST_ITEM = ITEMS[0];
const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";
const SECOND_ITEM = ITEMS[1];
const SECOND_ITEM_LABEL = SECOND_ITEM?.label || "";

const PROPS: SelectSingleProps = {
  items: ITEMS,
  label: LOREM.label(),
  name: LOREM.textXxs,
  onChange: ON_CHANGE,
  id: LOREM.id(),
  placeholder: LOREM.select,
};

const renderComponent = async (props: SelectSingleProps) => {
  /**
   * Popper.js calls its update() method asynchronously after the
   * initial render, so we must wrap the render() call in waitFor()
   * to prevent test execution from being out of order.
   */
  return waitFor(async () => {
    return render(<SelectSingle {...props} />);
  });
};

describe("<SelectSingle />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).not.toBeNull();
    });

    it("should render placeholder", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");
      expect((combobox as HTMLInputElement).placeholder).toBe(
        PROPS.placeholder
      );
    });

    it("should be labelled", async () => {
      const { container, getByRole } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");
      const label = container.querySelector("label");
      const labelId = label?.getAttribute("id");

      expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);
      expect(label).not.toBeNull();
      expect(label?.getAttribute("for")).toBe(PROPS.id);
      expect(label?.textContent).toBe(PROPS.label);
    });

    it("should match snapshot", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).toMatchSnapshot();
    });
  });

  describe("Disabled state", () => {
    it("should not show dropdown menu when user clicks", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, disabled: true });

      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });

    it("should not show dropdown menu when user attempts keyboard navigation", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, disabled: true });

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });
  });

  describe("Dropdown menu", () => {
    it("should not be visible on first mount", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });

    it("should be visible after user clicks on select", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });

    it("should be visible after user opens select with keyboard", async () => {
      const { getByRole } = await renderComponent(PROPS);

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });
  });

  describe("Initial selected item", () => {
    it("should have value of initial selected item", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        initialSelectedItem: FIRST_ITEM,
      });

      const combobox = getByRole("combobox");
      expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
    });
  });

  describe("Invalid", () => {
    it("should have error styling", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        invalid: true,
      });

      const combobox = getByRole("combobox");
      const outerElement = combobox.parentElement?.parentElement;

      expect(combobox).toHaveClass(a11yError);
      expect(outerElement).toHaveClass(variantIntent.bad);
    });

    it("should render error message", async () => {
      const { getByText } = await renderComponent({
        ...PROPS,
        invalid: true,
        errorMessage: LOREM.errorMessage(),
      });

      expect(getByText(LOREM.errorMessage())).not.toBeNull();
    });
  });

  describe("On `isOpen` change", () => {
    it("should call onIsOpenChange when user opens select by clicking", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        onIsOpenChange: ON_IS_OPEN_CHANGE,
      });

      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      expect(ON_IS_OPEN_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          isOpen: true,
        })
      );
    });

    it("should call onIsOpenChange when user opens select with keyboard", async () => {
      renderComponent({
        ...PROPS,
        onIsOpenChange: ON_IS_OPEN_CHANGE,
      });

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");

      expect(ON_IS_OPEN_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          isOpen: true,
        })
      );
    });
  });

  describe("Selecting with mouse", () => {
    it("should call `onChange` with first clicked item", async () => {
      const { getByRole, getByText } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const firstItem = getByText(FIRST_ITEM_LABEL);
      await userEvent.click(firstItem);

      expect(ON_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          selectedItem: FIRST_ITEM,
        })
      );
    });

    it("should have value of first clicked item", async () => {
      const { getByRole, getByText } = await renderComponent(PROPS);
      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const firstItem = getByText(FIRST_ITEM_LABEL);
      await userEvent.click(firstItem);

      expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
    });

    it("should call `onChange` with second clicked item", async () => {
      const { getByRole, getByText } = await renderComponent(PROPS);
      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const firstItem = getByText(FIRST_ITEM_LABEL);
      await userEvent.click(firstItem);

      const secondItem = getByText(SECOND_ITEM_LABEL);
      await userEvent.click(secondItem);

      expect(ON_CHANGE).toHaveBeenLastCalledWith(
        expect.objectContaining({
          selectedItem: SECOND_ITEM,
        })
      );
    });

    it("should have value of second clicked item", async () => {
      const { getByRole, getByText } = await renderComponent(PROPS);
      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const firstItem = getByText(FIRST_ITEM_LABEL);
      await userEvent.click(firstItem);

      const secondItem = getByText(SECOND_ITEM_LABEL);
      await userEvent.click(secondItem);

      expect((combobox as HTMLInputElement).value).toBe(SECOND_ITEM_LABEL);
    });
  });

  describe("Selecting with keyboard", () => {
    it("should call `onChange` with first item selected with keyboard", async () => {
      renderComponent(PROPS);

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      expect(ON_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          selectedItem: FIRST_ITEM,
        })
      );
    });

    it("should have value of first item selected with keyboard", async () => {
      const { getByRole } = await renderComponent(PROPS);
      const combobox = getByRole("combobox");

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
    });

    it("should call `onChange` with second item selected with keyboard", async () => {
      renderComponent(PROPS);

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      expect(ON_CHANGE).toHaveBeenLastCalledWith(
        expect.objectContaining({
          selectedItem: SECOND_ITEM,
        })
      );
    });

    it("should have value of second item selected with keyboard", async () => {
      const { getByRole } = await renderComponent(PROPS);
      const combobox = getByRole("combobox");

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{arrowdown}");
      await userEvent.keyboard("{enter}");

      expect((combobox as HTMLInputElement).value).toBe(SECOND_ITEM_LABEL);
    });
  });

  describe("Size", () => {
    it("should have the `md` class name by default", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).toHaveClass(elementSize.md);
    });

    it("should have the `sm` class name when size = sm", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("combobox")).toHaveClass(elementSize.sm);
    });

    it("should have the `md` class name when size = md", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("combobox")).toHaveClass(elementSize.md);
    });

    it("should have the `lg` class name when size = lg", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("combobox")).toHaveClass(elementSize.lg);
    });
  });

  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotRight: <Icon data-testid="icon" icon={faSearch} />,
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
