/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectButton } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectButtonProps } from "..";

const ON_CHANGE = jest.fn();
const ON_IS_OPEN_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});
const FIRST_ITEM = ITEMS[0];
const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";
const SECOND_ITEM = ITEMS[1];
const SECOND_ITEM_LABEL = SECOND_ITEM?.label || "";

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: ITEMS,
  name: LOREM.textXxs,
  onChange: ON_CHANGE,
};

const renderComponent = async (props: SelectButtonProps) => {
  /**
   * Popper.js calls its update() method asynchronously after the
   * initial render, so we must wrap the render() call in waitFor()
   * to prevent test execution from being out of order.
   */
  return waitFor(async () => {
    return render(<SelectButton {...props} />);
  });
};

describe("<SelectButton />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).not.toBeNull();
    });

    it("should render buttonText", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");
      expect(combobox as HTMLInputElement).toHaveTextContent(
        PROPS.buttonText as string
      );
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
  });

  describe("Size", () => {
    it("should have the `md` class name by default", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.lg);
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
