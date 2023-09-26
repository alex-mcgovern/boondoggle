/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FieldInput } from "../FieldInput";

import type { FieldInputProps } from "../FieldInput";

const PROPS: FieldInputProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: FieldInputProps) => {
    return render(<FieldInput {...props} />);
};

describe("<FieldInput />", () => {
    describe("class name", () => {
        test("should have the className passed to it", () => {
            const { getByRole } = renderComponent({
                className: "test-class",
                ...PROPS,
            });

            expect(getByRole("textbox")).toHaveClass("test-class");
        });
    });
});
