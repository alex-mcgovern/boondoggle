/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectSingleProps } from "..";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems();
const FIRST_ITEM = ITEMS[0];
const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";
const SECOND_ITEM = ITEMS[1];
const SECOND_ITEM_LABEL = SECOND_ITEM?.label || "";

const PROPS: SelectSingleProps = {
    items: ITEMS,
    label: LOREM.label(),
    name: LOREM.textXxs,
    onChange: ON_CHANGE,
    id: LOREM.id(),
    placeholder: LOREM.select,
};

const renderComponent = ({ ...props }: SelectSingleProps) => {
    return render(<SelectSingle {...props} />);
};

describe("<SelectSingle />", () => {
    describe("Basic smoke tests", () => {
        it("should render without throwing", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("combobox")).not.toBeNull();
        });

        it("should render placeholder", () => {
            const { getByRole } = renderComponent(PROPS);

            const combobox = getByRole("combobox");
            expect((combobox as HTMLInputElement).placeholder).toBe(
                PROPS.placeholder
            );
        });

        it("should be labelled", () => {
            const { container, getByRole } = renderComponent(PROPS);

            const combobox = getByRole("combobox");
            const label = container.querySelector("label");
            const labelId = label?.getAttribute("id");

            expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);
            expect(label).not.toBeNull();
            expect(label?.getAttribute("for")).toBe(PROPS.id);
            expect(label?.textContent).toBe(PROPS.label);
        });

        it("should match snapshot", () => {
            const { getByRole } = renderComponent(PROPS);

            expect(getByRole("combobox")).toMatchSnapshot();
        });
    });

    describe("Initial selected item", () => {
        it("should have value of initial selected item", async () => {
            const { getByRole } = renderComponent({
                ...PROPS,
                initialSelectedItem: FIRST_ITEM,
            });

            const combobox = getByRole("combobox");
            expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
        });
    });

    describe("Dropdown menu", () => {
        it("should not be showing dropdown menu on mount", async () => {
            const { getByRole } = renderComponent(PROPS);

            const menu = getByRole("listbox");
            expect(menu).not.toBeVisible();
        });

        it("should be showing dropdown menu after user opens it by clicking", async () => {
            const { getByRole } = renderComponent(PROPS);

            const combobox = getByRole("combobox");
            await userEvent.click(combobox);

            const menu = getByRole("listbox");
            expect(menu).toBeVisible();
        });
    });

    describe("Selecting with mouse", () => {
        it("should call `onChange` with first clicked item", async () => {
            const { getByRole, getByText } = renderComponent(PROPS);
            const combobox = getByRole("combobox");
            await userEvent.click(combobox);

            const firstItem = getByText(FIRST_ITEM_LABEL);
            await userEvent.click(firstItem);

            expect(ON_CHANGE).toHaveBeenCalledWith(
                expect.objectContaining({
                    selectedItem: FIRST_ITEM,
                })
            );
        });

        it("should have value of first clicked item", async () => {
            const { getByRole, getByText } = renderComponent(PROPS);
            const combobox = getByRole("combobox");
            await userEvent.click(combobox);

            const firstItem = getByText(FIRST_ITEM_LABEL);
            await userEvent.click(firstItem);

            expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
        });

        it("should call `onChange` with second clicked item", async () => {
            const { getByRole, getByText } = renderComponent(PROPS);
            const combobox = getByRole("combobox");
            await userEvent.click(combobox);

            const firstItem = getByText(FIRST_ITEM_LABEL);
            await userEvent.click(firstItem);

            const secondItem = getByText(SECOND_ITEM_LABEL);
            await userEvent.click(secondItem);

            expect(ON_CHANGE).toHaveBeenLastCalledWith(
                expect.objectContaining({
                    selectedItem: SECOND_ITEM,
                })
            );
        });

        it("should have value of second clicked item", async () => {
            const { getByRole, getByText } = renderComponent(PROPS);
            const combobox = getByRole("combobox");
            await userEvent.click(combobox);

            const firstItem = getByText(FIRST_ITEM_LABEL);
            await userEvent.click(firstItem);

            const secondItem = getByText(SECOND_ITEM_LABEL);
            await userEvent.click(secondItem);

            expect((combobox as HTMLInputElement).value).toBe(
                SECOND_ITEM_LABEL
            );
        });
    });

    describe("Selecting with keyboard", () => {
        it("should call `onChange` with first item selected with keyboard", async () => {
            renderComponent(PROPS);

            await userEvent.tab();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect(ON_CHANGE).toHaveBeenCalledWith(
                expect.objectContaining({
                    selectedItem: FIRST_ITEM,
                })
            );
        });

        it("should have value of first item selected with keyboard", async () => {
            const { getByRole } = renderComponent(PROPS);
            const combobox = getByRole("combobox");

            await userEvent.tab();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect((combobox as HTMLInputElement).value).toBe(FIRST_ITEM_LABEL);
        });

        it("should call `onChange` with second item selected with keyboard", async () => {
            renderComponent(PROPS);

            await userEvent.tab();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect(ON_CHANGE).toHaveBeenLastCalledWith(
                expect.objectContaining({
                    selectedItem: SECOND_ITEM,
                })
            );
        });

        it("should have value of second item selected with keyboard", async () => {
            const { getByRole } = renderComponent(PROPS);
            const combobox = getByRole("combobox");

            await userEvent.tab();
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{arrowdown}");
            await userEvent.keyboard("{enter}");

            expect((combobox as HTMLInputElement).value).toBe(
                SECOND_ITEM_LABEL
            );
        });
    });

    describe("Slot props", () => {
        it("should render node passed to `slotLeft`", () => {
            const { getByTestId } = renderComponent({
                ...PROPS,
                slotLeft: <Icon data-testid="icon" icon={faSearch} />,
            });

            expect(getByTestId("icon")).not.toBeNull();
        });

        it("should render node passed to `slotRight`", () => {
            const { getByTestId } = renderComponent({
                ...PROPS,
                slotRight: <Icon data-testid="icon" icon={faSearch} />,
            });
            expect(getByTestId("icon")).not.toBeNull();
        });
    });
});
