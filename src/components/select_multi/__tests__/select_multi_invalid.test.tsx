/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";
import { SelectMulti } from "../../select/SelectMulti";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

import type { SelectMultiProps } from "../../select/SelectMulti";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  errorMessage: LOREM.errorMessage(),
  id: LOREM.id(),
  invalid: true,
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
