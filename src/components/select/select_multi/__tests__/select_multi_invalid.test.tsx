/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { a11yError } from "../../../../styles/common/a11y.css";
import { variantColorOverlay } from "../../../../styles/theme.css";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectMulti } from "../select_multi.comp";

import type { SelectMultiProps } from "../select_multi.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  errorMessage: LOREM.errorMessage(),
  id: LOREM.id(),
  invalid: true,
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
  describe("Invalid", () => {
    it("should have error styling", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const combobox = getByRole("combobox");

      expect(combobox).toHaveClass(a11yError);
      expect(combobox?.parentNode?.parentNode).toHaveClass(
        variantColorOverlay.red
      );
    });

    it("should render error message", async () => {
      const { getByText } = await renderComponent(PROPS);

      expect(getByText(LOREM.errorMessage())).not.toBeNull();
    });
  });
});
