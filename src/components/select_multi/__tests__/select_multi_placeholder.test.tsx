/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
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
  it("should render placeholder", async () => {
    const { getByRole } = await renderComponent(PROPS);

    const combobox = getByRole("combobox");
    expect((combobox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
  });
});
