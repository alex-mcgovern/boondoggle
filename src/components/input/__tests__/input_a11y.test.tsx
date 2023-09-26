/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { FieldInput } from "../FieldInput";

import type { InputProps } from "../FieldInput";

const PROPS: InputProps = {
    id: LOREM.id(),
    label: LOREM.label(),
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
    return render(<FieldInput {...props} />);
};

describe("<FieldInput />", () => {
    test("should assign name to the element", () => {
        const { getByRole } = renderComponent(PROPS);

        expect((getByRole("textbox") as HTMLInputElement).name).toBe(PROPS.name);
    });

    test("should be labelled", () => {
        const { container, getByLabelText } = renderComponent(PROPS);

        const label = container.querySelector("label");

        expect(label).not.toBeNull();

        expect(label?.getAttribute("for")).toBe(PROPS.id);

        expect(label?.textContent).toBe(PROPS.label);

        expect(getByLabelText(PROPS.label as string, { selector: "input" })).not.toBeNull();
    });
});
