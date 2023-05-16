/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
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
  describe("Size", () => {
    it("should have the `md` class name by default", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
        elementFontSize.md
      );
    });

    it("should have the `sm` class name when size = sm", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
        elementFontSize.sm
      );
    });

    it("should have the `md` class name when size = md", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
        elementFontSize.md
      );
    });

    it("should have the `lg` class name when size = lg", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
        elementFontSize.lg
      );
    });
  });
});
