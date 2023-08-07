/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectMulti } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../field.select/__mocks__/select.mock";

import type { SelectMultiProps } from "..";

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
  describe("keyboard navigation", () => {
    /** ---------------------------------------------
     * input value
     * ----------------------------------------------- */

    describe("input value", () => {
      it("should have placeholder with count of 1 items", async () => {
        const { getByRole, user } = renderComponent(PROPS);

        const combobox = getByRole("combobox");

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");
      });

      it("should have placeholder with count of 2 items", async () => {
        const { getByRole, user } = renderComponent(PROPS);
        const combobox = getByRole("combobox");

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).placeholder).toBe("2 selected");
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
          expect.arrayContaining([PROPS.items[0]])
        );
      });

      it("should call `onChange()` with second item selected with keyboard", async () => {
        const { user } = renderComponent(PROPS);

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenLastCalledWith(
          expect.arrayContaining([PROPS.items[0], PROPS.items[1]])
        );
      });

      it("should call `onChange()` with no items after selecting then deselecting", async () => {
        const { user } = renderComponent(PROPS);

        await user.tab();

        await user.keyboard("{arrowdown}");
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenLastCalledWith(expect.arrayContaining([]));
      });
    });
  });
});
