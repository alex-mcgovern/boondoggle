import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { AppLayoutVertical } from "..";
import { Button } from "../../button";

const meta = {
    args: {},
    component: AppLayoutVertical.Root,
    parameters: {
        layout: "fullscreen",
    },
    title: "AppLayoutVertical",
} satisfies Meta<typeof AppLayoutVertical.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (p) => {
        return (
            <AppLayoutVertical.Root {...p}>
                <AppLayoutVertical.Nav>
                    <Button>Button</Button>
                </AppLayoutVertical.Nav>
                <AppLayoutVertical.Main>
                    {faker.lorem.paragraphs(100)}
                </AppLayoutVertical.Main>
            </AppLayoutVertical.Root>
        );
    },
};
