/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectMulti  } from "../select_multi.comp";

import type { SelectMultiProps } from "../select_multi.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.textXxs,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectMultiProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectMulti {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectMulti />", () => {
  describe("Initial selected item", () => {
    it("should have value of initial selected item", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        initialSelectedItems: [PROPS.items[0]],
      });

      const combobox = getByRole("combobox");
      expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");
    });
  });
});
