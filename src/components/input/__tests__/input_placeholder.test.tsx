/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { Input } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { InputProps } from "..";

const PROPS: InputProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
    return render(<Input {...props} />);
};

describe("<Input />", () => {
    test("should render placeholder", () => {
        const { getByRole } = renderComponent(PROPS);

        const textbox = getByRole("textbox");

        expect((textbox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
    });
});
