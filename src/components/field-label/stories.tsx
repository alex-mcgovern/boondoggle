import { FieldLabel as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { StoryFn, StoryObj } from "@storybook/react";
import type { FieldLabelProps as StoryCompProps } from ".";

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
