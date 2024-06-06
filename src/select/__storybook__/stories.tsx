import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectButton } from "..";

const meta = {
    args: {
        items: [
            {
                children: [
                    {
                        id: "france",
                        name: "France",
                    },
                    {
                        id: "germany",
                        name: "Germany",
                    },
                    {
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
                        id: "uae",
                        name: "United Arab Emirates",
                    },
                    {
                        id: "saudi_arabia",
                        name: "Saudi Arabia",
                    },
                    {
                        id: "oman",
                        name: "Oman",
                    },
                ],
                id: "mena",
                name: "MENA",
            },
        ],
        placeholder: "Select a country",
    },
    component: Select,
    parameters: {
        layout: "padded",
    },
    render: (args) => {
        return (
            <Select {...args}>
                <SelectButton />
            </Select>
        );
    },
    title: "Components/Select",
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Borderless: Story = {
    render: (args) => {
        return (
            <Select {...args}>
                <SelectButton variant="borderless" />
            </Select>
        );
    },
};
