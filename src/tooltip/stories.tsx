import type { Meta, StoryObj } from "@storybook/react";

import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";

import { Tooltip, TooltipTriggerButton } from ".";
import { Button } from "../button";
import { Icon } from "../icon";

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
        children: (
            <TooltipTriggerButton>
                <button type="button">
                    <Icon
                        color="text_low_contrast"
                        icon={faInfoCircle}
                    />
                </button>
            </TooltipTriggerButton>
        ),
        placement: "top",
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
