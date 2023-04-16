import { Slider as StoryComponent } from "..";

import type { SliderProps as StoryComponentProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    title: "React components/Molecules/Slider",
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
};
