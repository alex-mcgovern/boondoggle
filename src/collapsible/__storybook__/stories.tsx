import type { StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faker } from "@faker-js/faker";

import { CollapsibleRoot, CollapsibleTrigger } from "..";

export default {
	component: CollapsibleRoot,
	parameters: {
		layout: "padded",
	},
	title: "Components/Collapsible",
};

export const Default: StoryObj<ComponentProps<typeof CollapsibleRoot>> = {
	args: {
		children: faker.lorem.paragraphs(3),
		triggerNode: <CollapsibleTrigger>Click me</CollapsibleTrigger>,
	},
};
