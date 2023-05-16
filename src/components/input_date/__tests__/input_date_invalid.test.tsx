/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: InputDateProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => {
  return {
    user: userEvent.setup(),
    ...render(<InputDate {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<InputDate />", () => {
  describe("Invalid", () => {
    it("should have error styling", async () => {
      const { getByRole } = await renderComponent({
        ...PROPS,
        invalid: true,
      });

      const textbox = getByRole("textbox");

      expect(textbox.parentNode?.parentNode).toHaveClass(a11yError);
      expect(textbox.parentNode?.parentNode?.parentNode).toHaveClass(
        variantColorOverlay.red
      );
    });

    it("should render error message", async () => {
      const { getByText } = await renderComponent({
        ...PROPS,
        errorMessage: LOREM.errorMessage(),
        invalid: true,
      });

      expect(getByText(LOREM.errorMessage())).not.toBeNull();
    });
  });
});
