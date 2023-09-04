import { faInfoCircle } from "@fortawesome/sharp-regular-svg-icons";

import { Tooltip as StoryComp, Tooltip, TooltipContent, TooltipTrigger } from ".";
import { Icon } from "../icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {},
    component: StoryComp,
    title: "Components/Tooltip2",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
    return (
        <Tooltip placement="right">
            <TooltipTrigger asChild>
                <button type="button">
                    <Icon icon={faInfoCircle} />
                </button>
            </TooltipTrigger>
            <TooltipContent>My tooltip</TooltipContent>
        </Tooltip>
    );
};

// @ts-expect-error todo: fix this
export const Default: Story = {
    render: Template,
};
