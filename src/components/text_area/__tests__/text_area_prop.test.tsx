/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

/** ----------------------------------------------------------------------------- */

describe("<TextArea />", () => {
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
