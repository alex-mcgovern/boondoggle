/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Input } from "../input.comp";

import type { InputProps } from "../input.comp";

const PROPS: InputProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** ----------------------------------------------------------------------------- */

const renderComponent = ({ ...props }: InputProps) => {
  return render(<Input {...props} />);
};

describe("<Input />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should match snapshot", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("textbox")).toMatchSnapshot();
    });
  });
});
