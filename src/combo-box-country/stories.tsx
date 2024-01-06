import type { Meta, StoryObj } from "@storybook/react";

import { ComboBoxCountry } from ".";
import { ComboBoxButton } from "../combo-box";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
    component: ComboBoxCountry,
    render: (args) => {
        return (
            <ComboBoxCountry {...args}>
                <Label>Country/Region</Label>
                <Group>
                    <Input />
                    <ComboBoxButton />
                </Group>
            </ComboBoxCountry>
        );
    },
    title: "ComboBoxCountry",
} satisfies Meta<typeof ComboBoxCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
