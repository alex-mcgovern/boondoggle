import type { Meta, StoryObj } from "@storybook/react";
import type { Key } from "react-aria-components";

import { useReducer, useState } from "react";

import {
    NumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from ".";
import { css } from "../css/index.css";
import { FieldsGrid } from "../fields-grid";
import { Group } from "../group";
import { FlagAe } from "../icon-flag/ae";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import { Main } from "../main";
import { Select, SelectButton } from "../select";
import { Toaster } from "../toaster";

const meta = {
    args: {},
    component: NumberField,
    decorators: [
        (Story) => {
            return (
                <>
                    <Toaster />
                    <Story />
                </>
            );
        },
    ],
    render: (args) => {
        return (
            <NumberField {...args}>
                <Label>Label</Label>
                <Input />
            </NumberField>
        );
    },
    title: "NumberField",
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};

export const Percent: Story = {
    args: {
        formatOptions: {
            style: "percent",
        },
        maxValue: 1,
        minValue: 0,
        step: 0.01,
    },
};

export const KitchenSink: Story = {
    args: {
        defaultValue: 42000.69,
    },
    render: (args) => {
        return (
            <NumberField {...args}>
                <Label>Label</Label>
                <Group>
                    <NumberFieldDecrementButton />
                    <Input variant="unstyled" />
                    <NumberFieldIncrementButton />
                </Group>
            </NumberField>
        );
    },
};

export const ExampleComposedCurrencyField: Story = {
    args: {
        defaultValue: 42000.69,
        id: "amount",
        name: "amount",
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [currency, setCurrency] = useState<"EUR" | "GBP" | "USD">("EUR");
        return (
            <div
                className={css({
                    marginBottom: "space_2",
                })}
            >
                <Label htmlFor="amount">Amount</Label>
                <div
                    className={css({
                        alignItems: "center",
                        display: "flex",
                        gap: "space_2",
                    })}
                >
                    <NumberField
                        defaultValue={42000.69}
                        formatOptions={{
                            currency,
                            currencyDisplay: "code",
                            style: "currency",
                        }}
                        id="amount"
                        name="amount"
                    >
                        <Input />
                    </NumberField>

                    <Select<"EUR" | "GBP" | "USD">
                        aria-label="Currency"
                        items={[
                            {
                                id: "EUR",
                                name: "EUR",
                                slotLeft: (
                                    <FlagEu
                                        height="space_4"
                                        width="space_4"
                                    />
                                ),
                            },
                            {
                                id: "USD",
                                name: "USD",
                                slotLeft: (
                                    <FlagUs
                                        height="space_4"
                                        width="space_4"
                                    />
                                ),
                            },
                            {
                                id: "GBP",
                                name: "GBP",
                                slotLeft: (
                                    <FlagGb
                                        height="space_4"
                                        width="space_4"
                                    />
                                ),
                            },
                        ]}
                        onSelectionChange={(k) => {
                            setCurrency(k as typeof currency);
                        }}
                        placement="bottom end"
                        selectedKey={currency}
                    >
                        <SelectButton />
                    </Select>
                </div>
            </div>
        );
    },
};

const ACCOUNTS = [
    {
        id: "AED",
        name: "AED account",
        slotLeft: (
            <FlagAe
                height="space_4"
                width="space_4"
            />
        ),
    },
    {
        id: "USD",
        name: "USD account",
        slotLeft: (
            <FlagUs
                height="space_4"
                width="space_4"
            />
        ),
    },
];

const ICONS = {
    AED: (
        <FlagAe
            height="space_4"
            marginX="space_2"
            width="space_4"
        />
    ),
    USD: (
        <FlagUs
            height="space_4"
            marginX="space_2"
            width="space_4"
        />
    ),
};

const EXCHANGE_RATE_USD_TO_AED = 3.67;

type AmountState = {
    from: number;
    to: number;
};

type ActionType = "SET_FROM" | "SET_TO";

type Action = {
    payload: number;
    type: ActionType;
};

function reducer(_: AmountState, action: Action) {
    switch (action.type) {
        case "SET_FROM":
            return {
                from: action.payload,
                to: action.payload / EXCHANGE_RATE_USD_TO_AED,
            };
        case "SET_TO":
            return {
                from: action.payload * EXCHANGE_RATE_USD_TO_AED,
                to: action.payload,
            };
    }
}

export const ExampleFX: Story = {
    args: {
        defaultValue: 42000.69,
        id: "amount",
        name: "amount",
    },
    parameters: {
        layout: "padded",
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [from_currency, setFromCurrency] = useState<"UAE" | "USD" | null>(
            null,
        );
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [to_currency, setToCurrency] = useState<"UAE" | "USD" | null>(
            null,
        );

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [state, dispatch] = useReducer(reducer, { from: 0, to: 0 });

        return (
            <Main size="sm">
                <FieldsGrid>
                    <Select
                        className={css({ marginBottom: "space_4" })}
                        disabledKeys={[to_currency] as Iterable<Key>}
                        items={ACCOUNTS}
                        onSelectionChange={(k) => {
                            setFromCurrency(k as typeof from_currency);
                        }}
                        placeholder="Select an account"
                    >
                        <Label>From account</Label>
                        <SelectButton />
                    </Select>
                    <Select
                        className={css({ marginBottom: "space_4" })}
                        disabledKeys={[from_currency] as Iterable<Key>}
                        items={ACCOUNTS}
                        onSelectionChange={(k) => {
                            setToCurrency(k as typeof to_currency);
                        }}
                        placeholder="Select an account"
                    >
                        <Label>To account</Label>
                        <SelectButton />
                    </Select>

                    <NumberField
                        formatOptions={
                            from_currency
                                ? {
                                      currency: from_currency as string,
                                      currencyDisplay: "code",
                                      style: "currency",
                                  }
                                : {}
                        }
                        id="amount"
                        isDisabled={!to_currency || !from_currency}
                        name="amount"
                        onChange={(v) => {
                            dispatch({ payload: v, type: "SET_FROM" });
                        }}
                        value={state.from}
                    >
                        <Label htmlFor="amount">From amount</Label>
                        <Group>
                            <Input
                                icon={
                                    from_currency &&
                                    // @ts-expect-error quick n dirty example
                                    ICONS[from_currency as string]
                                }
                                variant="unstyled"
                            />
                        </Group>
                    </NumberField>

                    <NumberField
                        formatOptions={
                            to_currency
                                ? {
                                      currency: to_currency as string,
                                      currencyDisplay: "code",
                                      style: "currency",
                                  }
                                : {}
                        }
                        id="amount"
                        isDisabled={!to_currency || !from_currency}
                        name="amount"
                        onChange={(v) => {
                            dispatch({ payload: v, type: "SET_TO" });
                        }}
                        value={state.to}
                    >
                        <Label htmlFor="amount">To amount</Label>
                        <Group>
                            <Input
                                icon={
                                    // @ts-expect-error quick n dirty example
                                    to_currency && ICONS[to_currency as string]
                                }
                                variant="unstyled"
                            />
                        </Group>
                    </NumberField>
                </FieldsGrid>
            </Main>
        );
    },
};
