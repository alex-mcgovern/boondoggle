import type { Meta, StoryObj } from "@storybook/react";

import { ComboBoxCountry } from "..";
import { ComboBoxButton } from "../../combo-box";
import { Group } from "../../group";
import { Input } from "../../input";
import { Label } from "../../label";

const meta = {
    component: ComboBoxCountry,
    title: "Components/ComboBoxCountry",
} satisfies Meta<typeof ComboBoxCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Country/Region</Label>
                <Group>
                    <Input unstyled />
                    <ComboBoxButton />
                </Group>
            </>
        ),
    },
};
