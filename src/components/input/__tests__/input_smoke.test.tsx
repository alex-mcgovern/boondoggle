/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
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
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("textbox")).not.toBeNull();
        });
    });
});
