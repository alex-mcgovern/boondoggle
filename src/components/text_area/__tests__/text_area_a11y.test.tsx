/** @jest-environment jsdom */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { TextArea } from "../text_area.comp";

import type { TextAreaProps } from "../text_area.comp";

/** ----------------------------------------------------------------------------- */

const PROPS: TextAreaProps = {
  id: LOREM.id(),
  label: LOREM.label(),
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};

/** ----------------------------------------------------------------------------- */

describe("<TextArea />", () => {
  it("should assign name to the element", () => {
    const { getByRole } = renderComponent(PROPS);

    expect((getByRole("textbox") as HTMLTextAreaElement).name).toBe(PROPS.name);
  });

  it("should be labelled", () => {
    const { container } = renderComponent(PROPS);

    const label = container.querySelector("label");

    expect(label).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(PROPS.id);
    expect(label?.textContent).toBe(PROPS.label);
    // expect(
    //   getByLabelText(PROPS.label as string, { selector: "text_area" })
    // ).not.toBeNull();
  });

  it("should match snapshot", () => {
    const { getByRole } = renderComponent(PROPS);

    expect(getByRole("textbox")).toMatchSnapshot();
  });
});
