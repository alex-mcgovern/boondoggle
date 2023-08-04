/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectButton } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../field.select/__mocks__/select.mock";

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
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).not.toBeNull();
    });
  });
});
