import type { StoryFn, StoryObj } from "@storybook/react";
import { FieldLabel as StoryComp } from ".";
import type { FieldLabelProps as StoryCompProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";

export default {
	component: StoryComp,
	title: "Components/V1/FieldLabel",
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
