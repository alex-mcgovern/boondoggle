import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { TabCount, TabList, TabPanel, Tabs } from ".";

const meta = {
    args: {
        children: (
            <>
                <TabList
                    items={[
                        {
                            href: "/",
                            id: "tab_1",
                            label: "I am a link",
                        },
                        {
                            id: "tab_2",
                            label: faker.lorem.words(2),
                        },
                        {
                            id: "tab_3",
                            label: faker.lorem.words(3),
                        },
                        {
                            id: "tab_4",
                            label: faker.lorem.words(2),
                        },
                        {
                            id: "tab_5",
                            label: faker.lorem.words(1),
                        },
                        {
                            id: "tab_6",
                            label: faker.lorem.words(2),
                        },
                        {
                            id: "tab_7",
                            label: faker.lorem.words(3),
                        },
                        {
                            id: "tab_8",
                            label: faker.lorem.words(2),
                        },
                        {
                            id: "tab_9",
                            label: faker.lorem.words(1),
                        },
                        {
                            id: "tab_10",
                            label: faker.lorem.words(2),
                        },
                    ]}
                />
                <TabPanel id="tab_1">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_2">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_3">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_4">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_5">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_6">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_7">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_8">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_9">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_10">{faker.lorem.paragraphs(5)}</TabPanel>
            </>
        ),
    },
    component: Tabs,
    title: "Components/Tabs",
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTabCount: Story = {
    args: {
        children: (
            <>
                <TabList
                    items={[
                        {
                            href: "/",
                            id: "tab_1",
                            label: "I am a link",
                            slotRight: <TabCount count={1} />,
                        },
                        {
                            id: "tab_2",
                            label: faker.lorem.words(2),
                            slotRight: <TabCount isLoading />,
                        },
                        {
                            id: "tab_3",
                            label: faker.lorem.words(3),
                            slotRight: <TabCount count={42069} />,
                        },
                    ]}
                />
                <TabPanel id="tab_1">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_2">{faker.lorem.paragraphs(5)}</TabPanel>
                <TabPanel id="tab_3">{faker.lorem.paragraphs(5)}</TabPanel>
            </>
        ),
    },
};
