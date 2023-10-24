/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectSingle } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import "../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../icon";
import {
	mockSelectItems,
	mockSelectItemsGrouped,
} from "../__mocks__/select.mock";
import { flattenSelectItems } from "../flattenSelectItems";

import type { SelectSingleProps } from ".";
import { a11yError, theme } from "../../../style.css";

const ON_CHANGE = jest.fn();

const PROPS: SelectSingleProps<string> = {
	errorMessage: LOREM.errorMessage(),
	items: mockSelectItems({}),
	label: LOREM.label(),
	name: LOREM.text_xxs,
	onChange: ON_CHANGE,
	placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps<string>) => {
	return {
		user: userEvent.setup(),
		...render(<SelectSingle {...props} />),
	};
};

describe("<SelectSingle />", () => {
	describe("Basic smoke tests", () => {
		test("should render flat items without throwing", async () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("combobox")).not.toBeNull();
		});

		test.only("should render grouped items without throwing", async () => {
			const { getByRole } = renderComponent({
				...PROPS,
				items: mockSelectItemsGrouped({}),
			});

			expect(getByRole("combobox")).not.toBeNull();
		});
	});

	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", async () => {
			const { getByTestId } = renderComponent({
				...PROPS,
				slotLeft: <Icon data-testid="icon" icon={faSearch} />,
			});

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", async () => {
			const { getByTestId } = renderComponent({
				...PROPS,
				slotRight: <Icon data-testid="icon" icon={faSearch} />,
			});

			expect(getByTestId("icon")).not.toBeNull();
		});
	});

	test("should render placeholder", async () => {
		const { getByRole } = renderComponent(PROPS);

		const combobox = getByRole("combobox");

		expect((combobox as HTMLInputElement).placeholder).toBe(
			PROPS.placeholder,
		);
	});

	test("mouse navigation", async () => {
		const ON_CLICK = jest.fn();

		const ITEMS_AS_BUTTONS = mockSelectItems({
			as: "button",
			onClick: ON_CLICK,
		});

		const { getByRole, getByTestId, getByText, user } = renderComponent({
			...PROPS,
			items: ITEMS_AS_BUTTONS,
		});

		// Use the mouse to select the first item in the list

		await user.click(getByRole("combobox"));

		await user.click(getByText(ITEMS_AS_BUTTONS[0].label));

		expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[0]);

		expect(ON_CLICK).toHaveBeenCalledTimes(1);

		expect((getByRole("combobox") as HTMLInputElement).value).toBe(
			ITEMS_AS_BUTTONS[0].label,
		);

		// Now use the mouse to select the second item in the list

		await user.click(getByRole("combobox"));

		await user.click(getByText(ITEMS_AS_BUTTONS[1].label));

		expect(ON_CHANGE).toHaveBeenLastCalledWith(ITEMS_AS_BUTTONS[1]);

		expect(ON_CLICK).toHaveBeenCalledTimes(2);

		expect((getByRole("combobox") as HTMLInputElement).value).toBe(
			ITEMS_AS_BUTTONS[1].label,
		);

		// Now clear the input

		const clearButton = getByTestId("clear");

		await userEvent.click(clearButton);

		expect((getByRole("combobox") as HTMLInputElement).value).toBe("");

		expect(ON_CHANGE).toHaveBeenCalledWith(undefined);
	});

	test("should be labelled", async () => {
		const { container, getByRole } = renderComponent(PROPS);

		const combobox = getByRole("combobox");

		const label = container.querySelector("label");

		const labelId = label?.getAttribute("id");

		expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);

		expect(label).not.toBeNull();

		expect(label?.getAttribute("for")).toBe(PROPS.name);

		expect(label?.textContent).toBe(PROPS.label);
	});

	test("keyboard navigation", async () => {
		const ON_CLICK = jest.fn();

		const ITEMS_AS_BUTTONS = mockSelectItems({
			as: "button",
			onClick: ON_CLICK,
		});

		const { getByRole, user } = renderComponent({
			...PROPS,
			items: ITEMS_AS_BUTTONS,
		});

		await user.tab();

		await user.keyboard("{arrowdown}");

		await user.keyboard("{enter}");

		expect(ON_CHANGE).toHaveBeenCalledWith(ITEMS_AS_BUTTONS[0]);

		expect(ON_CLICK).toHaveBeenCalledTimes(1);

		expect((getByRole("combobox") as HTMLInputElement).value).toBe(
			ITEMS_AS_BUTTONS[0].label,
		);

		await user.keyboard("{arrowdown}");

		await user.keyboard("{arrowdown}");

		await user.keyboard("{enter}");

		expect(ON_CHANGE).toHaveBeenLastCalledWith(ITEMS_AS_BUTTONS[1]);

		expect(ON_CLICK).toHaveBeenCalledTimes(2);

		expect((getByRole("combobox") as HTMLInputElement).value).toBe(
			ITEMS_AS_BUTTONS[1].label,
		);
	});

	test("should have error styling", () => {
		const { getByRole, getByText } = renderComponent({
			...PROPS,
			invalid: true,
		});

		const combobox = getByRole("combobox");

		expect(combobox.parentNode).toHaveClass(a11yError);

		expect(
			combobox.parentNode?.parentNode?.parentNode?.parentNode,
		).toHaveClass(theme.red);

		expect(getByText(LOREM.errorMessage())).not.toBeNull();
	});

	test("has value of initial selected item", async () => {
		const { getByRole } = renderComponent({
			...PROPS,
			initialSelectedItem: flattenSelectItems(PROPS.items)[0],
		});

		const combobox = getByRole("combobox");

		expect((combobox as HTMLInputElement).value).toBe(
			flattenSelectItems(PROPS.items)[0].label,
		);
	});

	test.only("allows clear with initial selected item", async () => {
		const { getByRole, getByTestId } = renderComponent({
			...PROPS,
			initialSelectedItem: flattenSelectItems(PROPS.items)[0],
			isClearable: true,
			strClear: "Clear",
		});

		const combobox = getByRole("combobox");
		const clearButton = getByTestId("clear");

		expect((combobox as HTMLInputElement).value).toBe(
			flattenSelectItems(PROPS.items)[0].label,
		);

		await userEvent.click(clearButton);

		expect((combobox as HTMLInputElement).value).toBe("");

		expect(ON_CHANGE).toHaveBeenCalledWith(undefined);
	});

	describe("Disabled state", () => {
		test("should not show dropdown menu when user clicks", async () => {
			const { getByRole } = renderComponent({ ...PROPS, disabled: true });

			const combobox = getByRole("combobox");

			await userEvent.click(combobox);

			const menu = getByRole("listbox", { hidden: true });

			expect(menu).not.toBeVisible();
		});

		test("should not show dropdown menu when user attempts keyboard navigation", async () => {
			const { getByRole } = renderComponent({ ...PROPS, disabled: true });

			await userEvent.tab();

			await userEvent.keyboard("{arrowdown}");

			const menu = getByRole("listbox", { hidden: true });

			expect(menu).not.toBeVisible();
		});
	});

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
