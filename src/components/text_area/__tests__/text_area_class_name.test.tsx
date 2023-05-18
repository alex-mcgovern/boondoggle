/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
  describe("class name", () => {
    it("should have the className passed to it", () => {
      const { getByRole } = renderComponent({
        className: "test-class",
        ...PROPS,
      });

      expect(getByRole("textbox")).toHaveClass("test-class");
    });
  });
});
