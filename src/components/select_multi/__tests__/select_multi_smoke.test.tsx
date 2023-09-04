/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { SelectMulti } from "../../select/t_select_multi";

import type { SelectMultiProps } from "../../select/t_select_multi";

const PROPS: SelectMultiProps = {
    id: LOREM.id(),
    items: mockSelectItems({}),
    label: LOREM.label(),
    name: LOREM.text_xxs,
    placeholder: LOREM.select,
};

const renderComponent = (props: SelectMultiProps) => {
    return {
        user: userEvent.setup(),
        ...render(<SelectMulti {...props} />),
    };
};

describe("<SelectMulti />", () => {
    describe("Basic smoke tests", () => {
        it("should render without throwing", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("combobox")).not.toBeNull();
        });
    });
});
