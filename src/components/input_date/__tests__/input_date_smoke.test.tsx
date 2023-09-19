/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { InputDateProps } from "..";

const PROPS: InputDateProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = async ({ ...props }: InputDateProps) => {
    return waitFor(() => {
        return render(<InputDate {...props} />);
    });
};

describe("<InputDate />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("textbox")).not.toBeNull();
        });

        test("should render placeholder when present", async () => {
            const { getByRole } = await renderComponent({
                name: LOREM.name(),
                placeholder: LOREM.placeholder(),
            });

            expect((getByRole("textbox") as HTMLInputElement).placeholder).toBe(
                LOREM.placeholder()
            );
        });
    });
});
