import type { Meta, StoryObj } from "@storybook/react";

import { TabList } from "..";

const meta = {
    component: TabList,
    title: "Components/TabList",
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                id: "tab_1",
                label: "Founding of Rome",
            },
            {
                id: "tab_2",
                label: "Monarchy and Republic",
            },
            {
                id: "tab_3",
                label: "Empire",
            },
        ],
    },
};
