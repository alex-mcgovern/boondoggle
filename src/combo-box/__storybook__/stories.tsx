import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox, ComboBoxButton, ComboBoxInput } from "..";
import { Group } from "../../group";
import { Label } from "../../label";

const meta = {
    component: ComboBox,
    title: "Components/ComboBox",
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Pick a fruit</Label>
                <Group>
                    <ComboBoxInput
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <ComboBoxButton />
                </Group>
            </>
        ),
        defaultItems: [
            {
                id: "apple",
                name: "Apple",
            },
            {
                id: "banana",
                name: "Banana",
            },
            {
                id: "cherry",
                name: "Cherry",
            },
            {
                id: "date",
                name: "Date",
            },
        ],
    },
};
