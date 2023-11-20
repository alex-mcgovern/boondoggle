import { faCircleSmall } from "@fortawesome/pro-solid-svg-icons/faCircleSmall";
import type { StoryFn, StoryObj } from "@storybook/react";
import { Pill as StoryComp } from ".";
import type { PillProps as StoryCompProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";

export default {
	component: StoryComp,
	title: "Components/Pill",
};

const TemplateColors: StoryFn<StoryCompProps> = () => {
	return (
		<Box alignItems="center" display="flex" gap="space_6">
			<StoryComp
				colorOverlay="blue"
				slotLeft={<Icon icon={faCircleSmall} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="red"
				slotLeft={<Icon icon={faCircleSmall} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="green"
				slotLeft={<Icon icon={faCircleSmall} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="amber"
				slotLeft={<Icon icon={faCircleSmall} />}
			>
				{LOREM.text_xxs}
			</StoryComp>
			<StoryComp
				colorOverlay="grey"
				slotLeft={<Icon icon={faCircleSmall} />}
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
