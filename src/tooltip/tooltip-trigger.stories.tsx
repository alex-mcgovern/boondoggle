import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipTrigger, TooltipTriggerButton } from ".";

const meta = {
    args: {},
    component: TooltipTrigger,
    title: "Components/Tooltip/TooltipTrigger",
} satisfies Meta<typeof TooltipTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TooltipTriggerButton />
                <Tooltip>I am a tooltip</Tooltip>
            </>
        ),
    },
};
