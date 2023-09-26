/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";
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
    describe("Invalid", () => {
        test("should have error styling", () => {
            const { getByRole } = renderComponent({
                ...PROPS,
                invalid: true,
            });

            const textbox = getByRole("textbox");

            expect(textbox).toHaveClass(a11yError);

            expect(textbox?.parentNode?.parentNode).toHaveClass(variantColorOverlay.red);
        });

        test("should render error message", () => {
            const { getByText } = renderComponent({
                ...PROPS,
                errorMessage: LOREM.errorMessage(),
                invalid: true,
            });

            expect(getByText(LOREM.errorMessage())).not.toBeNull();
        });
    });
});
