import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox, ComboBoxButton } from "..";
import { Group } from "../../group";
import { Input } from "../../input";
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
                    <Input
                        placeholder="Select a fruit..."
                        variant="unstyled"
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
        ],
    },
};
