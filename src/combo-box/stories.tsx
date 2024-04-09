import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox, ComboBoxButton } from ".";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";
import { SearchFieldIcon } from "../search-field";

const meta = {
    component: ComboBox,
    title: "ComboBox",
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const ITEMS = [
    {
        children: [
            {
                id: "apple",
                name: "Apple",
            },
            {
                description: "Yes, it's a fruit",
                id: "tomato",
                name: "Tomato",
            },
        ],
        id: "fruits",
        name: "Fruits",
    },
    {
        children: [
            {
                id: "carrot",
                name: "Carrot",
            },
            {
                id: "lettuce",
                name: "Lettuce",
            },
        ],
        id: "vegetables",
        name: "Vegetables",
    },
];

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Favourite food</Label>
                <Group>
                    <Input
                        placeholder="Type a food..."
                        variant="unstyled"
                    />
                    <ComboBoxButton />
                </Group>
            </>
        ),
        defaultItems: ITEMS,
    },
};

export const WithSearchIcon: Story = {
    args: {
        children: (
            <>
                <Label>Favourite food</Label>
                <Group>
                    <Input
                        icon={<SearchFieldIcon />}
                        placeholder="Type a food..."
                        variant="unstyled"
                    />
                    <ComboBoxButton />
                </Group>
            </>
        ),
        defaultItems: ITEMS,
    },
};
