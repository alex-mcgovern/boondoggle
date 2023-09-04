import { FieldLabel as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { FieldLabelProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    component: StoryComp,
    title: "Components/FieldLabel",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
    return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
    args: {
        label: LOREM.text_xxs,
    },
    render: Template,
};
