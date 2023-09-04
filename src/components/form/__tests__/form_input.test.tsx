/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormInput } from "../../form_input";
import { FormTestProvider } from "../form_test_provider.comp";

import type { FormInputProps } from "../../form_input";

const PROPS: FormInputProps = {
    errorMessage: LOREM.errorMessage(),
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: FormInputProps) => {
    return render(
        <FormTestProvider>
            <FormInput {...props} />
        </FormTestProvider>
    );
};

describe("<FormInput />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("textbox")).not.toBeNull();
        });

        test("should match snapshot", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("textbox")).toMatchSnapshot();
        });
    });

    describe("Updating the value", () => {
        test("should update value when the user types", async () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("textbox")).toHaveValue("");

            await userEvent.type(getByRole("textbox"), "New value");

            expect(getByRole("textbox")).toHaveValue("New value");
        });
    });
});
