/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: InputDateProps = {
  id: LOREM.id(),
  label: LOREM.label(),
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => {
  return {
    user: userEvent.setup(),
    ...render(<InputDate {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<InputDate />", () => {
  it("should be labelled", async () => {
    const { container, getByLabelText } = await renderComponent(PROPS);

    const label = container.querySelector("label");

    expect(label).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(PROPS.id);
    expect(label?.textContent).toBe(PROPS.label);
    expect(
      getByLabelText(PROPS.label as string, { selector: "input" })
    ).not.toBeNull();
  });

  it("should match snapshot", async () => {
    const { getByRole } = await renderComponent(PROPS);

    expect(getByRole("textbox")).toMatchSnapshot();
  });
});
