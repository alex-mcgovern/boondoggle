/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";

import type { SelectSingleProps } from "../select_single.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectSingleProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
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
  describe("Initial selected item", () => {
    it("should have value of initial selected item", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        initialSelectedItem: PROPS.items[0],
      });

      const combobox = getByRole("combobox");
      expect((combobox as HTMLInputElement).value).toBe(PROPS.items[0].label);
    });
  });
});
