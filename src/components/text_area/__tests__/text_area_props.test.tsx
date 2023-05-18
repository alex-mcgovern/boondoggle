/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { Icon } from "../../icon";
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
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotRight: <Icon data-testid="icon" icon={faSearch} />,
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
