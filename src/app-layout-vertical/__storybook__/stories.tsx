import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { AppVerticalMain, AppVerticalNav, AppVerticalRoot } from "..";
import { Button } from "../../button";

const meta = {
    args: {},
    component: AppVerticalRoot,
    parameters: {
        layout: "fullscreen",
    },
    title: "AppLayoutVertical",
} satisfies Meta<typeof AppVerticalRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (p) => {
        return (
            <AppVerticalRoot {...p}>
                <AppVerticalNav>
                    <Button>Button</Button>
                </AppVerticalNav>
                <AppVerticalMain>{faker.lorem.paragraphs(100)}</AppVerticalMain>
            </AppVerticalRoot>
        );
    },
};
