/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectMulti } from "../select_multi.comp";

import type { SelectMultiProps } from "../select_multi.comp";

/** ----------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();

const PROPS: SelectMultiProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
  onChange: ON_CHANGE,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectMultiProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectMulti {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectMulti />", () => {
  describe("mouse navigation", () => {
    /** ---------------------------------------------
     * input value
     * ----------------------------------------------- */

    describe("input value", () => {
      it("should have placeholder with count of 1 selected items", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);
        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");
      });

      it("should have placeholder with count of 2 items", async () => {
        const { getByRole, getByText, user } = await renderComponent(PROPS);
        const combobox = getByRole("combobox");
        await user.click(combobox);

        const firstItem = getByText(PROPS.items[0].label);
        await user.click(firstItem);

        const secondItem = getByText(PROPS.items[1].label);
        await user.click(secondItem);

        expect((combobox as HTMLInputElement).placeholder).toBe("2 selected");
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
            selectedItems: [PROPS.items[0]],
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
            selectedItems: [PROPS.items[0], PROPS.items[1]],
          })
        );
      });
    });
  });
});
