import type { Meta, StoryObj } from "@storybook/react";

import { FileTrigger } from ".";
import { Button } from "../button";

const meta = {
    component: FileTrigger,
    title: "Components/FileTrigger",
} satisfies Meta<typeof FileTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Button>Choose a file</Button>,
        onSelect: (e) => {
            const files = e ? Array.from(e) : [];
            const filenames = files.map((file) => file.name);
            alert(filenames.join(", "));
        },
    },
};
