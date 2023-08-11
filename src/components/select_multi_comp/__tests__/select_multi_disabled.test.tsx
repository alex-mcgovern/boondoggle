/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectMulti } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../select_comp/__mocks__/select.mock";

import type { SelectMultiProps } from "..";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
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
