import type { Meta, StoryObj } from "@storybook/react";

import { parseAbsoluteToLocal } from "@internationalized/date";

import { DatePicker, DatePickerButton } from "..";
import { DateInput } from "../../date-input";
import { Group } from "../../group";
import { Label } from "../../label";

const meta = {
    component: DatePicker,
    title: "Components/DatePicker",
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Date/time</Label>
                <Group>
                    <DateInput unstyled />
                    <DatePickerButton />
                </Group>
            </>
        ),
    },
};

export const WithTime: Story = {
    args: {
        children: (
            <>
                <Label>Date/time</Label>
                <Group>
                    <DateInput unstyled />
                    <DatePickerButton />
                </Group>
            </>
        ),
        defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
    },
};
