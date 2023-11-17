import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";
import type { StoryFn, StoryObj } from "@storybook/react";
import { Collapsible as StoryComp } from ".";
import type { CollapsibleProps as StoryCompProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Icon } from "../icon";
import { utilCss } from "../index.css";

export default {
	component: StoryComp,
	title: "Components/Collapsible",
};

const TriggerNode = (
	<button
		className={utilCss({
			alignItems: "center",
			color: "text_high_contrast",
			display: "flex",
			width: "100%",
		})}
		type="button"
	>
		Open collapsible
		<Icon icon={faAngleDown} marginLeft="auto" />
	</button>
);

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
	return <StoryComp {...rest} triggerNode={TriggerNode} />;
};

export const Default: StoryObj<StoryCompProps> = {
	args: {
		children: LOREM.title_xl,
	},
	render: Template,
};