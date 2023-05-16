/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";
import { SelectSingleProps } from "../select_single.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();
const ON_IS_OPEN_CHANGE = jest.fn();

const PROPS: SelectSingleProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.textXxs,
  onChange: ON_CHANGE,
  onIsOpenChange: ON_IS_OPEN_CHANGE,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectSingle {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("keyboard navigation", () => {
    /** ---------------------------------------------
     * input value
     * ----------------------------------------------- */

    describe("input value", () => {
      it("should have value of first item selected with keyboard", async () => {
        const { getByRole, user } = renderComponent(PROPS);

        const combobox = getByRole("combobox");

        await user.tab(); // Initial tab will focus <body> for some reason ¯\_(ツ)_/¯
        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[0].label);
      });

      it("should have value of second item selected with keyboard", async () => {
        const { getByRole, user } = renderComponent(PROPS);
        const combobox = getByRole("combobox");

        await user.tab(); // Initial tab will focus <body> for some reason ¯\_(ツ)_/¯
        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[1].label);
      });
    });

    /** ---------------------------------------------
     * onIsOpenChange();
     * ----------------------------------------------- */

    describe("onIsOpenChange()", () => {
      it("should call `onIsOpenChange()` when user opens select with keyboard", async () => {
        const { user } = renderComponent(PROPS);

        await user.tab(); // Initial tab will focus <body> for some reason ¯\_(ツ)_/¯
        await user.tab();
        await user.keyboard("{arrowdown}");

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
      it("should call `onChange()` with first item selected with keyboard", async () => {
        const { user } = renderComponent(PROPS);

        await user.tab(); // Initial tab will focus <body> for some reason ¯\_(ツ)_/¯
        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenCalledWith(
          expect.objectContaining({
            selectedItem: PROPS.items[0],
          })
        );
      });

      it("should call `onChange()` with second item selected with keyboard", async () => {
        const { user } = renderComponent(PROPS);

        await user.tab(); // Initial tab will focus <body> for some reason ¯\_(ツ)_/¯
        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItem: PROPS.items[1],
          })
        );
      });
    });
  });
});
