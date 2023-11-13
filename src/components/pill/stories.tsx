import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons";
import { Pill as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";
import type { StoryFn, StoryObj } from "@storybook/react";
import type { PillProps as StoryCompProps } from ".";

export default {
	component: StoryComp,
	title: "Components/Pill",
};

const TemplateSizes: StoryFn<StoryCompProps> = () => {
	return (
		<Box alignItems="center" display="flex" gap="space_6">
			<StoryComp
				size="lg"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				size="md"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				size="sm"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
		</Box>
	);
};

export const Sizes: StoryObj<StoryCompProps> = {
	render: TemplateSizes,
};

const TemplateColors: StoryFn<StoryCompProps> = () => {
	return (
		<Box alignItems="center" display="flex" gap="space_6">
			<StoryComp
				colorOverlay="blue"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="red"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="green"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="amber"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="grey"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
		</Box>
	);
};

export const Colors: StoryObj<StoryCompProps> = {
	render: TemplateColors,
};

export const WithNumber: StoryObj<StoryCompProps> = {
	args: {
		children: 1,
	},
};
