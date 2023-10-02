/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { Input } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { InputProps } from "..";

const PROPS: InputProps = {
    label: LOREM.label(),
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
    return render(<Input {...props} />);
};

describe("<Input />", () => {
    test("should assign name to the element", () => {
        const { getByRole } = renderComponent(PROPS);

        expect((getByRole("textbox") as HTMLInputElement).name).toBe(
            PROPS.name
        );
    });

    test("should be labelled", () => {
        const { container, getByLabelText } = renderComponent(PROPS);

        const label = container.querySelector("label");

        expect(label).not.toBeNull();

        expect(label?.getAttribute("for")).toBe(PROPS.name);

        expect(label?.textContent).toBe(PROPS.label);

        expect(
            getByLabelText(PROPS.label as string, { selector: "input" })
        ).not.toBeNull();
    });
});
