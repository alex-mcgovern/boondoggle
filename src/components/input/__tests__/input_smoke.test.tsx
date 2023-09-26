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
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("textbox")).not.toBeNull();
        });
    });
});
