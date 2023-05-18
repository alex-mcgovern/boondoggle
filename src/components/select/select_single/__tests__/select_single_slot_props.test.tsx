/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { Icon } from "../../../icon";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";

import type { SelectSingleProps } from "../select_single.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectSingleProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.textXxs,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectSingle {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotRight: <Icon data-testid="icon" icon={faSearch} />,
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
