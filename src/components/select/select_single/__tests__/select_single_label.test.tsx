/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectSingle } from "../select_single.comp";
import { SelectSingleProps } from "../select_single.comp";

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
  it("should be labelled", async () => {
    const { container, getByRole } = await renderComponent(PROPS);

    const combobox = getByRole("combobox");
    const label = container.querySelector("label");
    const labelId = label?.getAttribute("id");

    expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);
    expect(label).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(PROPS.id);
    expect(label?.textContent).toBe(PROPS.label);
  });

  it("should match snapshot", async () => {
    const { getByRole } = await renderComponent(PROPS);

    expect(getByRole("combobox")).toMatchSnapshot();
  });
});
