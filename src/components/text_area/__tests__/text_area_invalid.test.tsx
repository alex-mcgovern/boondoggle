/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<TextArea />", () => {
  describe("Invalid", () => {
    it("should have error styling", () => {
      const { getByRole } = renderComponent({
        ...PROPS,
        invalid: true,
      });

      const textbox = getByRole("textbox");

      expect(textbox).toHaveClass(a11yError);
      expect(textbox?.parentNode?.parentNode).toHaveClass(
        variantColorOverlay.red
      );
    });

    it("should render error message", () => {
      const { getByText } = renderComponent({
        ...PROPS,
        errorMessage: LOREM.errorMessage(),
        invalid: true,
      });

      expect(getByText(LOREM.errorMessage())).not.toBeNull();
    });
  });
});
