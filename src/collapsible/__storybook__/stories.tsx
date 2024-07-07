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
        children: (
            <>
                <Collapsible.Trigger>
                    <Collapsible.TriggerButton>
                        Click me
                    </Collapsible.TriggerButton>
                </Collapsible.Trigger>
                <Collapsible.Content>
                    {faker.lorem.paragraphs(3)}
                </Collapsible.Content>
            </>
        ),
    },
};
