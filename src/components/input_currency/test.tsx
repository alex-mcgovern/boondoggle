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
    test("(en-GB) Should have correct default value", async () => {
        const { getByRole } = renderComponent({
            defaultValue: 42000.69,
            initialCurrency: "USD",
            locale: "en-GB",
            name: "amount",
        });

        const input = getByRole("textbox");

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
});
