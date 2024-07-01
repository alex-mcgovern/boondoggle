import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";
import { useState } from "react";

import { NumberField } from "..";
import { Group } from "../../group";
import { Input } from "../../input";
import { Label } from "../../label";
import { Select } from "../../select";
import { Toaster } from "../../toaster";

const meta = {
    args: {},
    component: NumberField.Root,
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
            <NumberField.Root {...args}>
                <Label>Label</Label>
                <Input />
            </NumberField.Root>
        );
    },
    title: "NumberField.Root",
} satisfies Meta<typeof NumberField.Root>;

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
                    <Input unstyled />
                    <NumberField.DecrementButton />
                    <NumberField.IncrementButton />
                </Group>
            </>
        ),
        step: 100,
    },
    render: (args) => {
        return <NumberField.Root {...args}></NumberField.Root>;
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
                    <NumberField.Root
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
                    </NumberField.Root>

                    <Select.Root
                        aria-label="Currency"
                        items={[
                            {
                                id: "EUR",
                                name: "EUR",
                            },
                            {
                                id: "USD",
                                name: "USD",
                            },
                            {
                                id: "GBP",
                                name: "GBP",
                            },
                        ]}
                        onSelectionChange={(k) => {
                            setCurrency(k as typeof currency);
                        }}
                        placement="bottom end"
                        selectedKey={currency}
                    >
                        <Select.Button />
                    </Select.Root>
                </div>
            </div>
        );
    },
};
