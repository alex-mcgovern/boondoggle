import type { StoryFn, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import type { IconProps as StoryCompProps } from ".";

import { Icon as StoryComp } from ".";

export default {
    component: StoryComp,
    title: "Icon",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
    return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
    args: {
        icon: faShapes,
    },
    render: Template,
};
