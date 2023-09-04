/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";

import type { InputDateProps } from "..";

const PROPS: InputDateProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => ({
    user: userEvent.setup(),
    ...render(<InputDate {...props} />),
});

describe("<InputDate />", () => {
    describe("Size", () => {
        test("should have the `md` class name by default", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
        });

        test("should have the `sm` class name when size = sm", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

            expect(getByRole("textbox")).toHaveClass(elementFontSize.sm);
        });

        test("should have the `md` class name when size = md", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

            expect(getByRole("textbox")).toHaveClass(elementFontSize.md);
        });

        test("should have the `lg` class name when size = lg", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

            expect(getByRole("textbox")).toHaveClass(elementFontSize.lg);
        });
    });
});
