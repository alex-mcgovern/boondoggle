import type { Meta, StoryObj } from "@storybook/react";

import { parseAbsoluteToLocal } from "@internationalized/date";

import { DatePicker, DatePickerButton } from ".";
import { DateInput } from "../date-input";
import { Group } from "../group";
import { Label } from "../label";

const meta = {
    component: DatePicker,
    title: "DatePicker",
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Date/time</Label>
                <Group>
                    <DateInput variant="unstyled" />
                    <DatePickerButton />
                </Group>
            </>
        ),
        onChange: (v) => {
            alert(v);
        },
    },
};

export const WithTime: Story = {
    args: {
        children: (
            <>
                <Label>Date/time</Label>
                <Group>
                    <DateInput variant="unstyled" />
                    <DatePickerButton />
                </Group>
            </>
        ),
        defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
        onChange: (v) => {
            alert(v);
        },
    },
};
