/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectMulti } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

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
