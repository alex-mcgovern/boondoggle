/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectButton } from "../select_button.comp";
import { SelectButtonProps } from "../select_button.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();
const ON_IS_OPEN_CHANGE = jest.fn();

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: mockSelectItems({}),
  name: LOREM.textXxs,
  onChange: ON_CHANGE,
  onIsOpenChange: ON_IS_OPEN_CHANGE,
};

const renderComponent = (props: SelectButtonProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectButton {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectButton />", () => {
  describe("keyboard navigation", () => {
    /** ---------------------------------------------
     * input value
     * ----------------------------------------------- */

    describe("input value", () => {
      it("should have value of first clicked item", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);
        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[0].label);
      });

      it("should have value of second clicked item", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);
        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        const secondItem = getByText(PROPS.items[1].label);
        await user.click(secondItem);

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[1].label);
      });
    });

    /** ---------------------------------------------
     * onIsOpenChange();
     * ----------------------------------------------- */

    describe("onIsOpenChange()", () => {
      it("should call `onIsOpenChange()` when user opens select by clicking", async () => {
        const { getByRole, user } = await renderComponent({
          ...PROPS,
          onIsOpenChange: ON_IS_OPEN_CHANGE,
        });

        const combobox = getByRole("combobox");
        await user.click(combobox);

        expect(ON_IS_OPEN_CHANGE).toHaveBeenCalledWith(
          expect.objectContaining({
            isOpen: true,
          })
        );
      });
    });

    /** ---------------------------------------------
     * onChange();
     * ----------------------------------------------- */

    describe("onChange()", () => {
      it("should call `onChange()` with first clicked item", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);

        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        expect(ON_CHANGE).toHaveBeenCalledWith(
          expect.objectContaining({
            selectedItem: PROPS.items[0],
          })
        );
      });

      it("should call `onChange()` with second clicked item", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);
        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        const secondItem = getByText(PROPS.items[1].label);
        await user.click(secondItem);

        expect(ON_CHANGE).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItem: PROPS.items[1],
          })
        );
      });
    });
  });
});
