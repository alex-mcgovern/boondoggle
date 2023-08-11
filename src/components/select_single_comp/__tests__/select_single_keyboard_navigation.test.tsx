/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../select_comp/__mocks__/select.mock";

import type { SelectSingleProps } from "..";

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
  describe("keyboard navigation", () => {
    /** ---------------------------------------------
     * input value
     * ----------------------------------------------- */

    describe("input value", () => {
      it("should have value of first item selected with keyboard", async () => {
        const { getByRole, user } = renderComponent(PROPS);

        const combobox = getByRole("combobox");

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[0].label);
      });

      it("should have value of second item selected with keyboard", async () => {
        const { getByRole, user } = renderComponent(PROPS);
        const combobox = getByRole("combobox");

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).value).toBe(PROPS.items[1].label);
      });
    });

    /** ---------------------------------------------
     * onChange();
     * ----------------------------------------------- */

    describe("onChange()", () => {
      it("should call `onChange()` with first item selected with keyboard", async () => {
        const { user } = renderComponent(PROPS);

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

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

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
