import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "..";

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
    component: Select.Root,
    parameters: {
        layout: "padded",
    },
    render: (args) => {
        return (
            <Select.Root {...args}>
                <Select.Button />
            </Select.Root>
        );
    },
    title: "Select",
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Borderless: Story = {
    render: (args) => {
        return (
            <Select.Root {...args}>
                <Select.Button variant="borderless" />
            </Select.Root>
        );
    },
};
