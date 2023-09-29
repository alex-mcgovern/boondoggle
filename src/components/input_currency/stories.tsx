import { InputCurrency as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { FlagAe, FlagUs } from "../icon_flag";

import type { Meta, StoryObj } from "@storybook/react";

type Currency = "USD" | "GBP" | "EUR";

const meta = {
    args: {
        initialCurrency: "USD",
        name: "input_currency",
        onChange: (e) => {
            console.info(e.target.value);
        },
        region: "en-US",
    },
    component: StoryComp,
    title: "Components/InputCurrency",
} satisfies Meta<typeof StoryComp<Currency>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsCurrencyEditable: Story = {
    args: {
        currencySelectItems: [
            {
                label: "USD",
                slotLeft: [
                    <FlagUs
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "USD",
            },
            {
                label: "AED",
                slotLeft: [
                    <FlagAe
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "AED",
            },
        ],
        currencySelectLabel: "Currency",
        isCurrencyEditable: true,
        onCurrencyChange(currency) {
            console.info(currency);
        },
    },
};

export const KitchenSink: Story = {
    args: {
        currencySelectItems: [
            {
                label: "USD",
                slotLeft: [
                    <FlagUs
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "USD",
            },
            {
                label: "AED",
                slotLeft: [
                    <FlagAe
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "AED",
            },
        ],
        currencySelectLabel: "Currency",
        id: "input_currency",
        isCurrencyEditable: true,
        label: "Amount",
        labelTooltip: LOREM.text_md,
        onCurrencyChange(currency) {
            console.info(currency);
        },
    },
};

export const KitchenSinkWithInvalidState: Story = {
    args: {
        currencySelectItems: [
            {
                label: "USD",
                slotLeft: [
                    <FlagUs
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "USD",
            },
            {
                label: "AED",
                slotLeft: [
                    <FlagAe
                        height="space_4"
                        width="space_4"
                    />,
                ],
                value: "AED",
            },
        ],
        currencySelectLabel: "Currency",
        id: "input_currency",
        invalid: true,
        isCurrencyEditable: true,
        label: "Amount",
        labelTooltip: LOREM.text_md,
        onCurrencyChange(currency) {
            console.info(currency);
        },
    },
};
