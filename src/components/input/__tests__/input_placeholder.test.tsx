/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { Input } from "../input.comp";

import type { InputProps } from "../input.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: InputProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
  return render(<Input {...props} />);
};

/** ----------------------------------------------------------------------------- */

describe("<Input />", () => {
  it("should render placeholder", () => {
    const { getByRole } = renderComponent(PROPS);

    const textbox = getByRole("textbox");
    expect((textbox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
  });
});
