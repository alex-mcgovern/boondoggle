/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectButton } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectButtonProps } from ".";

const renderComponent = (props: SelectButtonProps) => ({
    user: userEvent.setup(),
    ...render(<SelectButton {...props} />),
});

const ON_CHANGE = jest.fn();

const PROPS: SelectButtonProps = {
    buttonText: LOREM.select,
    id: LOREM.id(),
    items: mockSelectItems({}),
    name: LOREM.text_xxs,
    onChange: ON_CHANGE,
};

describe("<SelectButton />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("combobox")).not.toBeNull();
        });
    });
});

describe("<SelectButton />", () => {
    describe("Slot props", () => {
        test("should render node passed to `slotLeft`", async () => {
            const { getByTestId } = await renderComponent({
                ...PROPS,
                slotLeft: [
                    <Icon
                        data-testid="icon"
                        icon={faSearch}
                    />,
                ],
            });

            expect(getByTestId("icon")).not.toBeNull();
        });

        test("should render node passed to `slotRight`", async () => {
            const { getByTestId } = await renderComponent({
                ...PROPS,
                slotRight: [
                    <Icon
                        data-testid="icon"
                        icon={faSearch}
                    />,
                ],
            });

            expect(getByTestId("icon")).not.toBeNull();
        });
    });
});

describe("<SelectButton />", () => {
    describe("Size", () => {
        test("should have the `md` class name by default", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
        });

        test("should have the `sm` class name when size = sm", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

            expect(getByRole("combobox")).toHaveClass(elementFontSize.sm);
        });

        test("should have the `md` class name when size = md", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

            expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
        });

        test("should have the `lg` class name when size = lg", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

            expect(getByRole("combobox")).toHaveClass(elementFontSize.lg);
        });
    });
});

describe("<SelectButton />", () => {
    test("mouse navigation", async () => {
        const ON_CLICK = jest.fn();

        const ITEMS_AS_BUTTONS = mockSelectItems({ onClick: ON_CLICK });

        const { getByRole, getByText, user } = renderComponent({
            ...PROPS,
            items: ITEMS_AS_BUTTONS,
        });

        // Use the mouse to select the first item in the list

        await user.click(getByRole("combobox"));

        await user.click(getByText(ITEMS_AS_BUTTONS[0].label));

        expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[0]);

        expect(ON_CLICK).toHaveBeenCalledTimes(1);

        // Now use the mouse to select the second item in the list

        await user.click(getByRole("combobox"));

        await user.click(getByText(ITEMS_AS_BUTTONS[1].label));

        expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[1]);

        expect(ON_CLICK).toHaveBeenCalledTimes(2);
    });
});

describe("<SelectButton />", () => {
    test("keyboard navigation", async () => {
        const ON_CLICK = jest.fn();

        const ITEMS_AS_BUTTONS = mockSelectItems({ onClick: ON_CLICK });

        const { user } = renderComponent({
            ...PROPS,
            items: ITEMS_AS_BUTTONS,
        });

        await user.tab();

        await user.keyboard("{arrowdown}");

        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[0]);

        expect(ON_CLICK).toHaveBeenCalledTimes(1);

        await user.keyboard("{arrowdown}");

        await user.keyboard("{arrowdown}");

        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[1]);

        expect(ON_CLICK).toHaveBeenCalledTimes(2);
    });
});

describe("<SelectButton />", () => {
    describe("Disabled state", () => {
        test("should not show dropdown menu when user clicks", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, disabled: true });

            const combobox = getByRole("combobox");

            await userEvent.click(combobox);

            const menu = getByRole("listbox", { hidden: true });

            expect(menu).not.toBeVisible();
        });

        test("should not show dropdown menu when user attempts keyboard navigation", async () => {
            const { getByRole } = await renderComponent({ ...PROPS, disabled: true });

            await userEvent.tab();

            await userEvent.keyboard("{arrowdown}");

            const menu = getByRole("listbox", { hidden: true });

            expect(menu).not.toBeVisible();
        });
    });
});

describe("<SelectButton />", () => {
    describe("dialog / dropdown menu", () => {
        test("should not be visible on first mount", () => {
            const { getByRole } = renderComponent(PROPS);

            const menu = getByRole("listbox", { hidden: true });

            expect(menu).not.toBeVisible();
        });

        test("should be visible after user clicks on select", async () => {
            const { getByRole, user } = renderComponent(PROPS);

            const combobox = getByRole("combobox");

            await user.click(combobox);

            const menu = getByRole("listbox");

            expect(menu).toBeVisible();
        });

        test("should be visible after user opens select with keyboard", async () => {
            const { getByRole, user } = renderComponent(PROPS);

            await user.tab();

            await user.keyboard("{arrowdown}");

            const menu = getByRole("listbox");

            expect(menu).toBeVisible();
        });
    });
});
