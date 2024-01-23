import type { Meta, StoryObj } from "@storybook/react";

import { parseAbsoluteToLocal, parseDate } from "@internationalized/date";

import { DatePicker, DatePickerButton } from ".";
import { DateInput } from "../date-input";
import { Group } from "../group";
import { Label } from "../label";

const meta = {
    args: {
        onChange: (v) => {
            alert(v);
        },
    },
    component: DatePicker,
    render: (args) => (
        <DatePicker {...args}>
            <Label>Date</Label>
            <Group>
                <DateInput variant="unstyled" />
                <DatePickerButton />
            </Group>
        </DatePicker>
    ),
    title: "DatePicker",
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultValue: Story = {
    args: {
        defaultValue: parseDate("2023-12-16"),
    },
};

export const DefaultValueISO: Story = {
    args: {
        defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
    },
};
