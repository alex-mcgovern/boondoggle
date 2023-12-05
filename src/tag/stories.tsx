import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons/faTriangleCircleSquare";
import type { StoryFn, StoryObj } from "@storybook/react";
import { Tag as StoryComp } from ".";
import type { TagProps as StoryCompProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../v2-icon";

export default {
	component: StoryComp,
	title: "Components/V1/Tag",
};

const TemplateSizes: StoryFn<StoryCompProps> = () => {
	return (
		<Box alignItems="center" display="flex" gap="space_6">
			<StoryComp
				size="lg"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				size="md"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				size="sm"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
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
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="red"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="green"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
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
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
		</Box>
	);
};

export const Colors: StoryObj<StoryCompProps> = {
	render: TemplateColors,
};
