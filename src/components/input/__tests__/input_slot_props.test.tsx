/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { Icon } from "../../icon";
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
