/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { FieldInput } from "../FieldInput";

import type { InputProps } from "../FieldInput";

const PROPS: InputProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
    return render(<FieldInput {...props} />);
};

describe("<FieldInput />", () => {
    test("should render placeholder", () => {
        const { getByRole } = renderComponent(PROPS);

        const textbox = getByRole("textbox");

        expect((textbox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
    });
});
