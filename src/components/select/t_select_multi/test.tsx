/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectMulti } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yError } from "../../../styles/common/a11y.css";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectMultiProps } from ".";

const ON_CHANGE = jest.fn();

const PROPS: SelectMultiProps = {
    errorMessage: LOREM.errorMessage(),
    id: LOREM.id(),
    items: mockSelectItems({}),
    label: LOREM.label(),
    name: LOREM.text_xxs,
    onChange: ON_CHANGE,
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
        test("should render without throwing", async () => {
            const { getByRole } = await renderComponent(PROPS);

            expect(getByRole("combobox")).not.toBeNull();
        });
    });
});

describe("<SelectMulti />", () => {
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

describe("<SelectMulti />", () => {
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

describe("<SelectMulti />", () => {
    test("should render placeholder", async () => {
        const { getByRole } = await renderComponent(PROPS);

        const combobox = getByRole("combobox");

        expect((combobox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
    });
});

describe("<SelectMulti />", () => {
    describe("mouse navigation", () => {
        describe("input value", () => {
            test("should have placeholder with count of 1 selected items", async () => {
                const { getByRole, getByText, user } = await renderComponent(PROPS);

                const combobox = getByRole("combobox");

                await user.click(combobox);

                const firstItem = getByText(PROPS.items[0].label);

                await user.click(firstItem);

                expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");
            });

            test("should have placeholder with count of 2 items", async () => {
                const { getByRole, getByText, user } = await renderComponent(PROPS);

                const combobox = getByRole("combobox");

                await user.click(combobox);

                const firstItem = getByText(PROPS.items[0].label);

                await user.click(firstItem);

                const secondItem = getByText(PROPS.items[1].label);

                await user.click(secondItem);

                expect((combobox as HTMLInputElement).placeholder).toBe("2 selected");
            });
        });

        describe("onChange()", () => {
            test("should call `onChange()` with first clicked item", async () => {
                const { getByRole, getByText, user } = await renderComponent(PROPS);

                const combobox = getByRole("combobox");

                await user.click(combobox);

                const firstItem = getByText(PROPS.items[0].label);

                await user.click(firstItem);

                expect(ON_CHANGE).toHaveBeenCalledWith(expect.arrayContaining([PROPS.items[0]]));
            });

            test("should call `onChange()` with second clicked item", async () => {
                const { getByRole, getByText, user } = await renderComponent(PROPS);

                const combobox = getByRole("combobox");

                await user.click(combobox);

                const firstItem = getByText(PROPS.items[0].label);

                await user.click(firstItem);

                const secondItem = getByText(PROPS.items[1].label);

                await user.click(secondItem);

                expect(ON_CHANGE).toHaveBeenLastCalledWith(
                    expect.arrayContaining([PROPS.items[0], PROPS.items[1]])
                );
            });
        });
    });
});

describe("<SelectMulti />", () => {
    test("should be labelled", async () => {
        const { container, getByRole } = await renderComponent(PROPS);

        const combobox = getByRole("combobox");

        const label = container.querySelector("label");

        const labelId = label?.getAttribute("id");

        expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);

        expect(label).not.toBeNull();

        expect(label?.getAttribute("for")).toBe(PROPS.id);

        expect(label?.textContent).toBe(PROPS.label);
    });

    test("should match snapshot", async () => {
        const { getByRole } = await renderComponent(PROPS);

        expect(getByRole("combobox")).toMatchSnapshot();
    });
});

describe("<SelectMulti />", () => {
    test("keyboard navigation", async () => {
        const { getByRole, user } = renderComponent(PROPS);

        const combobox = getByRole("combobox");

        // Select first item

        await user.tab();
        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect(ON_CHANGE).toHaveBeenCalledWith(expect.arrayContaining([PROPS.items[0]]));
        expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");

        // Select second item

        await user.keyboard("{arrowdown}");
        await user.keyboard("{enter}");

        expect((combobox as HTMLInputElement).placeholder).toBe("2 selected");
        expect(ON_CHANGE).toHaveBeenLastCalledWith(
            expect.arrayContaining([PROPS.items[0], PROPS.items[1]])
        );
    });
});

describe("<SelectMulti />", () => {
    test("should have error styling & show error message when invalid", async () => {
        const { getByRole, getByText } = await renderComponent({ ...PROPS, invalid: true });

        const combobox = getByRole("combobox");

        expect(combobox).toHaveClass(a11yError);

        expect(combobox?.parentNode?.parentNode).toHaveClass(variantColorOverlay.red);
        expect(getByText(LOREM.errorMessage())).not.toBeNull();
    });
});

describe("<SelectMulti />", () => {
    describe("Initial selected item", () => {
        test("should have value of initial selected item", async () => {
            const { getByRole } = await renderComponent({
                ...PROPS,
                initialSelectedItems: [PROPS.items[0]],
            });

            const combobox = getByRole("combobox");

            expect((combobox as HTMLInputElement).placeholder).toBe("1 selected");
        });
    });
});

describe("<SelectMulti />", () => {
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

describe("<SelectMulti />", () => {
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
