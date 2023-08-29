/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../icon";
import { SelectMulti } from "../../select/SelectMulti";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

import type { SelectMultiProps } from "../../select/SelectMulti";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectMultiProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectMulti {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectMulti />", () => {
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotLeft: [<Icon data-testid="icon" icon={faSearch} />],
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", async () => {
      const { getByTestId } = await renderComponent({
        ...PROPS,
        slotRight: [<Icon data-testid="icon" icon={faSearch} />],
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
