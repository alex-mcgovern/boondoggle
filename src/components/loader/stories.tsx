import { Loader as StoryComp } from ".";

import type { LoaderProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
	component: StoryComp,
	title: "Components/Loader",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
	return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
	render: Template,
};
