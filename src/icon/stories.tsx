import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Icon as StoryComp } from ".";

import type { StoryFn, StoryObj } from "@storybook/react";
import type { IconProps as StoryCompProps } from ".";

export default {
	component: StoryComp,
	title: "Components/V1/Icon",
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
