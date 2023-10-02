/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";

import type { InputDateProps } from "..";

const PROPS: InputDateProps = {
    id: "date-picker",
    label: "date picker",
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => {
    return {
        user: userEvent.setup(),
        ...render(<InputDate {...props} />),
    };
};

describe("<InputDate />", () => {
    describe("Invalid", () => {
        test("should have error styling", async () => {
            const { getByLabelText } = await renderComponent({
                ...PROPS,
                invalid: true,
            });

            const textbox = getByLabelText(PROPS.label);

            expect(textbox.parentNode).toHaveClass(a11yError);

            expect(
                textbox?.parentNode?.parentNode?.parentNode?.parentNode
            ).toHaveClass(variantColorOverlay.red);
        });

        test("should render error message", async () => {
            const { getByText } = await renderComponent({
                ...PROPS,
                errorMessage: LOREM.errorMessage(),
                invalid: true,
            });

            expect(getByText(LOREM.errorMessage())).not.toBeNull();
        });
    });
});
