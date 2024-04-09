import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { Main } from ".";

const meta = {
    args: {},
    component: Main,
    title: "Components/Main",
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: faker.lorem.paragraphs(3),
        size: "lg",
    },
};
