import { Header as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta = {
    title: "Components/Header",
    component: StoryComp,
    args: {
        children: <><h1>Title</h1></>
    },
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
    args: {
        actions: <Button name="primary">Primary action</Button>
    }
};