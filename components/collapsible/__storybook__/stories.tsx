import type { StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";

import type { CollapsibleProps } from "..";

import { Collapsible } from "..";
import { Icon } from "../../icon";

export default {
    component: Collapsible,
    parameters: {
        layout: "padded",
    },
    title: "Components/Collapsible",
};

const TriggerNode = (
    <button
        className="flex align-center"
        type="button"
    >
        Open collapsible
        <Icon
            className="ml-auto"
            icon={faAngleDown}
        />
    </button>
);

export const Default: StoryObj<CollapsibleProps> = {
    args: {
        children: faker.lorem.paragraphs(3),
    },
    render: (args) => (
        <Collapsible
            {...args}
            triggerNode={TriggerNode}
        />
    ),
};
