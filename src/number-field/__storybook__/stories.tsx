import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";
import { useState } from "react";

import {
    NumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from "..";
import { Group } from "../../group";
import { FlagEu } from "../../icon-flag/eu";
import { FlagGb } from "../../icon-flag/gb";
import { FlagUs } from "../../icon-flag/us";
import { Input } from "../../input";
import { Label } from "../../label";
import { Select, SelectButton } from "../../select";
import { Toaster } from "../../toaster";

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
    title: "Components/NumberField",
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

export const IncrementDecrement: Story = {
    args: {
        children: (
            <>
                <Label>Count</Label>
                <Group>
                    <Input variant="unstyled" />
                    <NumberFieldDecrementButton />
                    <NumberFieldIncrementButton />
                </Group>
            </>
        ),
        step: 100,
    },
    render: (args) => {
        return <NumberField {...args}></NumberField>;
    },
};

export const WithCurrencySelect: Story = {
    args: {
        defaultValue: 42000.69,
        id: "amount",
        name: "amount",
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [currency, setCurrency] = useState<"EUR" | "GBP" | "USD">("EUR");
        return (
            <div className="mb-2">
                <Label htmlFor="amount">Amount</Label>
                <div className={clsx("flex", "gap-2", "align-center")}>
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

                    <Select
                        aria-label="Currency"
                        items={[
                            {
                                id: "EUR",
                                name: "EUR",
                                slotLeft: <FlagEu />,
                            },
                            {
                                id: "USD",
                                name: "USD",
                                slotLeft: <FlagUs />,
                            },
                            {
                                id: "GBP",
                                name: "GBP",
                                slotLeft: <FlagGb />,
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
