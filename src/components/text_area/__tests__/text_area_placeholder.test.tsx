/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

/** ----------------------------------------------------------------------------- */

describe("<TextArea />", () => {
  it("should render placeholder", () => {
    const { getByRole } = renderComponent(PROPS);

    const textbox = getByRole("textbox");
    expect((textbox as HTMLTextAreaElement).placeholder).toBe(
      PROPS.placeholder
    );
  });
});
