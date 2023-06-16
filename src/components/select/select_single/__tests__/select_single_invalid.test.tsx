/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { a11yError } from "../../../../styles/common/a11y.css";
import { variantColorOverlay } from "../../../../styles/theme.css";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";

import type { SelectSingleProps } from "../select_single.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectSingleProps = {
  errorMessage: LOREM.errorMessage(),
  id: LOREM.id(),
  invalid: true,
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

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
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
