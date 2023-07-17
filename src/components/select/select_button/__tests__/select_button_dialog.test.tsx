/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectButton } from "../select_button.comp";

import type { SelectButtonProps } from "../select_button.comp";

/** ----------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: mockSelectItems({}),
  name: LOREM.text_xxs,
  onChange: ON_CHANGE,
};

const renderComponent = (props: SelectButtonProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectButton {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectButton />", () => {
  describe("dialog / dropdown menu", () => {
    it("should not be visible on first mount", () => {
      const { getByRole } = renderComponent(PROPS);

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });

    it("should be visible after user clicks on select", async () => {
      const { getByRole, user } = renderComponent(PROPS);

      const combobox = getByRole("combobox");
      await user.click(combobox);

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });

    it("should be visible after user opens select with keyboard", async () => {
      const { getByRole, user } = renderComponent(PROPS);

      await user.tab();
      await user.keyboard("{arrowdown}");

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });
  });
});
