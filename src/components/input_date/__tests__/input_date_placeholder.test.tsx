/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { InputDateProps } from "..";

const PROPS: InputDateProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => {return {
    user: userEvent.setup(),
    ...render(<InputDate {...props} />),
}};

describe("<InputDate />", () => {
    test("should render placeholder", async () => {
        const { getByRole } = await renderComponent(PROPS);

        const textbox = getByRole("textbox");

        expect((textbox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
    });
});
