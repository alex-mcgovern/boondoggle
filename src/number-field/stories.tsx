import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import {
    NumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from ".";
import { Group } from "../group";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import { Select, SelectButton } from "../select";
import { sprinkles } from "../sprinkles/index.css";
import { ToastProvider } from "../toast";

const meta = {
    args: {},
    component: NumberField,
    decorators: [
        (Story) => {
            return (
                <ToastProvider>
                    <Story />
                </ToastProvider>
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
                    <Input />
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
                className={sprinkles({
                    marginBottom: "space_2",
                })}
            >
                <Label htmlFor="amount">Amount</Label>
                <div
                    className={sprinkles({
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
