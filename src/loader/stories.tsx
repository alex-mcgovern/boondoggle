import { Loader as StoryComp } from ".";

import type { StoryFn, StoryObj } from "@storybook/react";
import type { LoaderProps as StoryCompProps } from ".";

export default {
	component: StoryComp,
	title: "Loader",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
	return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
	render: Template,
};
