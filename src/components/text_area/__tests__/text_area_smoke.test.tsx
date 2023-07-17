/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** ----------------------------------------------------------------------------- */

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
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
