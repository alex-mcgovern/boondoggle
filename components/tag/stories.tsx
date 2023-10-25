import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons"; import { Tag as StoryComp } from "."; import { LOREM } from "../../mocks/LOREM.mock"; import { Box } from "../box/Box"; import { Icon } from "../icon"; import type { StoryFn, StoryObj } from "@storybook/react"; import type { TagProps as StoryCompProps } from ".";

export default {
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/Tag",
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
				theme="blue"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				theme="red"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				theme="green"
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				theme="amber"
				slotLeft={<Icon icon={faTriangleCircleSquare} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				theme="grey"
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
