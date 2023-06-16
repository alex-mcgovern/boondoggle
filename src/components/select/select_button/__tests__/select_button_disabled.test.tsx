/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectButton } from "../select_button.comp";

import type { SelectButtonProps } from "../select_button.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: mockSelectItems({}),
  name: LOREM.text_xxs,
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
});
