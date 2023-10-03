import { useState } from "react";

import { InputCurrency as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import {
    MOCK_CURRENCY_SELECT_ITEMS,
    MOCK_LOCALE_SELECT_ITEMS,
} from "../../../test/mock_data/input_currency";
import { Box } from "../box";
import { SelectSingle } from "../select/select_single";

import type { InputCurrencyProps } from ".";
import type { MockLocale } from "../../../test/mock_data/input_currency";
import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";

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
    const [locale, setLocale] = useState<MockLocale>(initLocale as MockLocale);
    const [numericValue, setNumericValue] = useState("");

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_4"
        >
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
