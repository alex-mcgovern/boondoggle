/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: InputDateProps = {
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
  it("should render placeholder", async () => {
    const { getByRole } = await renderComponent(PROPS);

    const textbox = getByRole("textbox");
    expect((textbox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
  });
});
