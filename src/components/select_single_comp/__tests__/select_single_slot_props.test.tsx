/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../icon_comp";
import { mockSelectItems } from "../../select_comp/__mocks__/select.mock";

import type { SelectSingleProps } from "..";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectSingleProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectSingle {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

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
