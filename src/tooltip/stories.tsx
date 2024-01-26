import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipTriggerButton } from ".";
import { Button } from "../button";

const meta = {
    args: {
        children: <Button>Tooltip</Button>,
        delay: 0,
        tooltipContent: "Tooltip text",
    },
    component: Tooltip,
    title: "Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <TooltipTriggerButton slot="clear" />,
    },
};

export const PlacementTop: Story = {
    args: {
        placement: "top",
    },
};

export const PlacementBottom: Story = {
    args: {
        placement: "bottom",
    },
};

export const PlacementRight: Story = {
    args: {
        placement: "right",
    },
};

export const PlacementLeft: Story = {
    args: {
        placement: "left",
    },
};
