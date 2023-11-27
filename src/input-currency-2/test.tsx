/**
 * @jest-environment jsdom
 */
import { userEvent } from "@storybook/testing-library";
import { act, cleanup, render } from "@testing-library/react";
import "@vanilla-extract/css/disableRuntimeStyles";

import { InputCurrency } from ".";

import type { InputCurrencyProps } from ".";

afterEach(cleanup);

const renderComponent = (props: InputCurrencyProps) => {
	return render(<InputCurrency {...props} />);
};

describe("<InputCurrency />", () => {
	test("doesn't accept non-numeric input or render NaN", async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			return userEvent.type(input, "not a number");
		});

		expect(input).toHaveValue("");
	});

	test.only("Allows leading zeroes in decimals", async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			return userEvent.type(input, "0.05");
		});

		expect(input).toHaveValue("0.05");
	});

	test("(en-GB) Should have correct default value", async () => {
		const { getByRole } = renderComponent({
			defaultValue: 42000.69,
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		expect(input).toHaveValue("42,000.69");
		expect(input).toHaveValue("42,000.69");
	});

	test("(de-DE) Should have correct default value", async () => {
		const { getByRole } = renderComponent({
			defaultValue: 42000.69,
			initialCurrency: "USD",
			locale: "de-DE",
			name: "amount",
		});

		const input = getByRole("textbox");

		expect(input).toHaveValue("42.000,69");
	});

	test("(en-GB) Should have correct value after user types a currency", async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			return userEvent.type(input, "42000.69");
		});

		expect(input).toHaveValue("42,000.69");
	});

	test("(de-DE) Should have correct value after user types a currency", async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "de-DE",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			return userEvent.type(input, "42000,69");
		});

		expect(input).toHaveValue("42.000,69");
	});

	test("cursor position should be correct after typing", async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			await userEvent.click(input);
			await userEvent.keyboard("4");
			await userEvent.keyboard("{arrowleft}");
			await userEvent.keyboard("3");
			await userEvent.keyboard("{arrowleft}");
			await userEvent.keyboard("2");
			await userEvent.keyboard("{arrowleft}");
			await userEvent.keyboard("1");
		});

		expect(input).toHaveValue("1,234");
		expect((input as HTMLInputElement).selectionStart).toBe(2);
	});

	test('cursor position should be correct after typing "."', async () => {
		const { getByRole } = renderComponent({
			initialCurrency: "USD",
			locale: "en-GB",
			name: "amount",
		});

		const input = getByRole("textbox");

		await act(async () => {
			await userEvent.type(input, ".");
		});

		expect(input).toHaveValue(".");
		expect((input as HTMLInputElement).selectionStart).toBe(1);
	});
});
