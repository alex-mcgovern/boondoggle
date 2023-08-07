/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../field.select/__mocks__/select.mock";

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
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).not.toBeNull();
    });
  });
});
