import { useState } from "react";

import { InputCurrency as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { FlagAe, FlagKw, FlagOm, FlagSa, FlagUs } from "../icon_flag";
import { SelectSingle } from "../select/select_single";

import type { InputCurrencyProps } from ".";
import type { SelectItemShape } from "../select/types";
import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";

type Currency = "USD" | "AED" | "OMR" | "SAR" | "KWD";
type Locale = "en-US" | "en-GB" | "de-DE" | "fr-FR" | "ar-AE";

const CURRENCY_SELECT_ITEMS: Array<SelectItemShape<Currency>> = [
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
    {
        label: "OMR",
        slotLeft: [
            <FlagOm
                height="space_4"
                width="space_4"
            />,
        ],
        value: "OMR",
    },
    {
        label: "SAR",
        slotLeft: [
            <FlagSa
                height="space_4"
                width="space_4"
            />,
        ],
        value: "SAR",
    },
    {
        label: "KWD",
        slotLeft: [
            <FlagKw
                height="space_4"
                width="space_4"
            />,
        ],
        value: "KWD",
    },
];

const LOCALE_SELECT_ITEMS: Array<SelectItemShape<Locale>> = [
    {
        label: "en-US",
        value: "en-US",
    },
    {
        label: "ar-AE",
        value: "ar-AE",
    },
    {
        label: "en-GB",
        value: "en-GB",
    },
    {
        label: "de-DE",
        value: "de-DE",
    },
    {
        label: "fr-FR",
        value: "fr-FR",
    },
];

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
    title: "Components/InputCurrency",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const LocalesTemplate = ({
    locale: initLocale,
    ...rest
}: InputCurrencyProps) => {
    const [locale, setLocale] = useState<Locale>(initLocale as Locale);
    const [numericValue, setNumericValue] = useState("");

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_4"
        >
            <SelectSingle<Locale>
                items={LOCALE_SELECT_ITEMS}
                name="locale"
                onChange={(item) => {
                    setLocale(item.value);
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
        currencySelectItems: CURRENCY_SELECT_ITEMS,
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
        currencySelectItems: CURRENCY_SELECT_ITEMS,
        currencySelectLabel: "Currency",
        isCurrencyEditable: true,
        onCurrencyChange(currency) {
            console.info(currency);
        },
    },
};

export const KitchenSinkWithInvalidState: Story = {
    args: {
        currencySelectItems: CURRENCY_SELECT_ITEMS,
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
