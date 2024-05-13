import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectButton } from "..";
import { FlagAe } from "../../icon-flag/ae";
import { FlagDe } from "../../icon-flag/de";
import { FlagEs } from "../../icon-flag/es";
import { FlagFr } from "../../icon-flag/fr";
import { FlagOm } from "../../icon-flag/om";
import { FlagSa } from "../../icon-flag/sa";

const meta = {
    args: {
        items: [
            {
                children: [
                    {
                        id: "france",
                        name: "France",
                        slotLeft: <FlagFr className="select-icon" />,
                    },
                    {
                        id: "germany",
                        name: "Germany",
                        slotLeft: <FlagDe className="select-icon" />,
                    },
                    {
                        id: "spain",
                        name: "Spain",
                        slotLeft: <FlagEs className="select-icon" />,
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
                        slotLeft: <FlagAe className="select-icon" />,
                    },
                    {
                        id: "saudi_arabia",
                        name: "Saudi Arabia",
                        slotLeft: <FlagSa className="select-icon" />,
                    },
                    {
                        id: "oman",
                        name: "Oman",
                        slotLeft: <FlagOm className="select-icon" />,
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
