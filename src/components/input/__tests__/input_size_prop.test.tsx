/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Input } from "../input.comp";

import type { InputProps } from "../input.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: InputProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
  return render(<Input {...props} />);
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<Input />", () => {
  describe("Size", () => {
    it("should have the `md` class name by default", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("textbox")).toHaveClass(elementFontSize.lg);
    });
  });
});
