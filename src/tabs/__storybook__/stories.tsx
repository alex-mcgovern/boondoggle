import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "..";

const meta = {
    component: Tabs.Container,
    title: "Components/Tabs",
} satisfies Meta<typeof Tabs.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Tabs.List>
                    <Tabs.Item id="tab_1">Founding of Rome</Tabs.Item>
                    <Tabs.Item id="tab_2">Monarchy and Republic</Tabs.Item>
                    <Tabs.Item id="tab_3">Empire</Tabs.Item>
                </Tabs.List>
                <Tabs.Content id="tab_1">
                    The founding of Rome is a mythological event that is said to
                    have occurred in 753 BC.
                </Tabs.Content>
                <Tabs.Content id="tab_2">
                    The monarchy was overthrown in 509 BC and the Roman Republic
                    was established.
                </Tabs.Content>
                <Tabs.Content id="tab_3">
                    The Roman Empire was established in 27 BC and lasted until
                    476 AD.
                </Tabs.Content>
            </>
        ),
    },
};
