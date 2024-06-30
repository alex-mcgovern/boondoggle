import type { StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faker } from "@faker-js/faker";

import { Collapsible } from "..";

export default {
    component: Collapsible.Root,
    parameters: {
        layout: "padded",
    },
    title: "Collapsible",
};

export const Default: StoryObj<ComponentProps<typeof Collapsible.Root>> = {
    args: {
        children: faker.lorem.paragraphs(3),
        triggerNode: <Collapsible.Trigger>Click me</Collapsible.Trigger>,
    },
};
