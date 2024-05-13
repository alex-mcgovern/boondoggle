import type { StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faker } from "@faker-js/faker";

import { Collapsible, CollapsibleTrigger } from "..";

export default {
    component: Collapsible,
    parameters: {
        layout: "padded",
    },
    title: "Components/Collapsible",
};

export const Default: StoryObj<ComponentProps<typeof Collapsible>> = {
    args: {
        children: faker.lorem.paragraphs(3),
        triggerNode: <CollapsibleTrigger>Click me</CollapsibleTrigger>,
    },
};
