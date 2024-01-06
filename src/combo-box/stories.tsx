import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox, ComboBoxButton } from ".";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
    args: {
        defaultItems: [
            {
                children: [
                    {
                        description: "This is a description",
                        id: "france",
                        name: "France",
                    },
                    {
                        description: "This is a description",
                        id: "germany",
                        name: "Germany",
                    },
                    {
                        description: "This is a description",
                        id: "spain",
                        name: "Spain",
                    },
                ],
                id: "europe",
                name: "Europe",
            },
            {
                children: [
                    {
                        description: "This is a description",
                        id: "uae",
                        name: "United Arab Emirates",
                    },
                    {
                        description: "This is a description",
                        id: "saudi_arabia",
                        name: "Saudi Arabia",
                    },
                    {
                        description: "This is a description",
                        id: "oman",
                        name: "Oman",
                    },
                ],
                id: "mena",
                name: "MENA",
            },
        ],
    },
    component: ComboBox,
    render: (args) => {
        return (
            <ComboBox {...args}>
                <Label>Country/Region</Label>
                <Group>
                    <Input />
                    <ComboBoxButton />
                </Group>
            </ComboBox>
        );
    },
    title: "ComboBox",
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
