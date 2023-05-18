/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Input } from "../input.comp";

import type { InputProps } from "../input.comp";

const PROPS: InputProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

const renderComponent = ({ ...props }: InputProps) => {
  return render(<Input {...props} />);
};

describe("<Input />", () => {
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
