import { faShapes } from "@fortawesome/free-solid-svg-icons";

import { Icon as StoryComponent } from "..";

import type { IconProps as StoryComponentProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    title: "React components/Atoms/Icon",
    component: StoryComponent,
};

const Template: StoryFn<StoryComponentProps> = ({
    ...rest
}: StoryComponentProps) => {
    return <StoryComponent {...rest} />;
};

export const Default: StoryObj<StoryComponentProps> = {
    render: Template,
    name: "default",
    args: {
        icon: faShapes,
    },
};
