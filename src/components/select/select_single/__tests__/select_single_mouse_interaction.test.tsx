/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";

import type { SelectSingleProps } from "../select_single.comp";

/** ----------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();

const PROPS: SelectSingleProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
  onChange: ON_CHANGE,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectSingle {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("mouse navigation", () => {
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
