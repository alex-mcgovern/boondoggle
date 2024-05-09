import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { TabList, TabPanel, Tabs } from "..";

const meta = {
    component: Tabs,
    parameters: {
        layout: "padded",
    },
    title: "Components/Tabs",
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TabList
                    items={[
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
                    ]}
                />
                <TabPanel id="tab_1">{faker.lorem.paragraphs(1)}</TabPanel>
                <TabPanel id="tab_2">{faker.lorem.paragraphs(1)}</TabPanel>
                <TabPanel id="tab_3">{faker.lorem.paragraphs(1)}</TabPanel>
            </>
        ),
    },
};
