import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { ScrollableMain } from ".";

const meta = {
    args: {},
    component: ScrollableMain,
    title: "Components/ScrollableMain",
} satisfies Meta<typeof ScrollableMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: faker.lorem.paragraphs(3),
        headers: "0",
    },
};
