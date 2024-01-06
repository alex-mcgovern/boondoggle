import type { Meta, StoryObj } from "@storybook/react";

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
                <DateInput />
                <DatePickerButton />
            </Group>
        </DatePicker>
    ),
    title: "DatePicker",
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
