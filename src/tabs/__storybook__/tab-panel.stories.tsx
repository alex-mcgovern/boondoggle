import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { TabPanel } from "..";

const meta = {
    args: {},
    component: TabPanel,
    title: "Components/TabPanel",
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: faker.lorem.paragraphs(2),
    },
};
