import { useState } from "react";

import { InputCurrency as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import {
	MOCK_CURRENCY_SELECT_ITEMS,
	MOCK_LOCALE_SELECT_ITEMS,
} from "../../test/mock_data/input_currency";
import { Box } from "../box/Box";
import { SelectSingle } from "../select/select_single";

import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import type { ChangeEvent } from "react";
import type { InputCurrencyProps } from ".";
import type { MockLocale } from "../../test/mock_data/input_currency";

const meta = {
	args: {
		initialCurrency: "USD",
		locale: "en-US",
		name: "input_currency",
		onChange: (e: ChangeEvent<HTMLInputElement>) => {
			console.info(e.target.value);
		},
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/InputCurrency",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const LocalesTemplate = ({
	locale: initLocale,
	...rest
}: InputCurrencyProps) => {
	const [locale, setLocale] = useState<MockLocale>(initLocale as MockLocale);
	const [numericValue, setNumericValue] = useState("");

	return (
		<Box alignItems="center" display="flex" gap="space_4">
			<SelectSingle<MockLocale>
				items={MOCK_LOCALE_SELECT_ITEMS}
				name="locale"
				onChange={(item) => {
					setLocale(item?.value || (initLocale as MockLocale));
				}}
				placeholder="Select a locale"
			/>
			<StoryComp
				{...rest}
				locale={locale}
				onChange={(e) => {
					setNumericValue(e.target.value);
					rest.onChange?.(e);
				}}
			/>
			<Box>{numericValue}</Box>
		</Box>
	);
};

export const KitchenSink: Story = {
	args: {
		currencySelectItems: MOCK_CURRENCY_SELECT_ITEMS,
		currencySelectLabel: "Currency",
		isCurrencyEditable: true,
		onCurrencyChange(currency) {
			console.info(currency);
		},
	},
	render: LocalesTemplate,
};

export const IsCurrencyEditable: Story = {
	args: {
		currencySelectItems: MOCK_CURRENCY_SELECT_ITEMS,
		currencySelectLabel: "Currency",
		isCurrencyEditable: true,
		onCurrencyChange(currency) {
			console.info(currency);
		},
	},
};

export const KitchenSinkWithInvalidState: Story = {
	args: {
		currencySelectItems: MOCK_CURRENCY_SELECT_ITEMS,
		currencySelectLabel: "Currency",
		invalid: true,
		isCurrencyEditable: true,
		label: "Amount",
		labelTooltip: LOREM.text_md,
		name: "input_currency",
		onCurrencyChange(currency) {
			console.info(currency);
		},
	},
};

export const WithDefaultValue: Story = {
	args: {
		defaultValue: 42000.69,
	},
};

export const TestCursorPosition1: Story = {
	name: "(Test) Cursor position 1",
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole("textbox");

		await userEvent.type(input, ".", {
			delay: 100,
		});

		expect(input).toHaveValue(".");
		expect((input as HTMLInputElement).selectionStart).toBe(1);
	},
};

export const TestCursorPosition2: Story = {
	name: "(Test) Cursor position 2",
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole("textbox");

		await userEvent.type(input, ".8", {
			delay: 100,
		});

		expect(input).toHaveValue("0.8");
		expect((input as HTMLInputElement).selectionStart).toBe(3);
	},
};

export const TestCursorPosition3: Story = {
	name: "(Test) Cursor position 3",
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole("textbox");

		await userEvent.click(input);
		await userEvent.keyboard("4");
		await userEvent.keyboard("{arrowleft}");
		await userEvent.keyboard("3");
		await userEvent.keyboard("{arrowleft}");
		await userEvent.keyboard("2");
		await userEvent.keyboard("{arrowleft}");
		await userEvent.keyboard("1");

		expect(input).toHaveValue("1,234");
		expect((input as HTMLInputElement).selectionStart).toBe(2);
	},
};

export const TestCursorPosition4: Story = {
	name: "(Test) Cursor position 4",
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole("textbox");

		await userEvent.click(input);
		await userEvent.keyboard("1234");
		expect(input).toHaveValue("1,234");
		expect((input as HTMLInputElement).selectionStart).toBe(5);

		await userEvent.keyboard("{arrowleft}");
		await userEvent.keyboard("{arrowleft}");
		await userEvent.keyboard("{arrowleft}");
		expect((input as HTMLInputElement).selectionStart).toBe(2);

		await userEvent.keyboard("{backspace}");

		expect(input).toHaveValue("234");
	},
};
