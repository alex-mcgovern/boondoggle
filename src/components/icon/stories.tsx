import { faShapes } from "@fortawesome/sharp-regular-svg-icons";

import { Icon as StoryComp } from ".";

import type { IconProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    component: StoryComp,
    title: "Components/Icon",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => <StoryComp {...rest} />;

export const Default: StoryObj<StoryCompProps> = {
    args: {
        icon: faShapes,
    },
    render: Template,
};
