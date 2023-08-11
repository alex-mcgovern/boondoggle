/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectButton } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../icon";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

import type { SelectButtonProps } from "..";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: mockSelectItems({}),
  name: LOREM.text_xxs,
};

const renderComponent = (props: SelectButtonProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectButton {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectButton />", () => {
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
