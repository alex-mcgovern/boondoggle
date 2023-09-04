/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { TextArea } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { TextAreaProps } from "..";

const PROPS: TextAreaProps = {
    id: LOREM.id(),
    label: LOREM.label(),
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
    return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
    test("should assign name to the element", () => {
        const { getByRole } = renderComponent(PROPS);

        expect((getByRole("textbox") as HTMLTextAreaElement).name).toBe(PROPS.name);
    });

    test("should be labelled", () => {
        const { container } = renderComponent(PROPS);

        const label = container.querySelector("label");

        expect(label).not.toBeNull();

        expect(label?.getAttribute("for")).toBe(PROPS.id);

        expect(label?.textContent).toBe(PROPS.label);

        // expect(
        //   getByLabelText(PROPS.label as string, { selector: "text_area" })
        // ).not.toBeNull();
    });

    test("should match snapshot", () => {
        const { getByRole } = renderComponent(PROPS);

        expect(getByRole("textbox")).toMatchSnapshot();
    });
});
