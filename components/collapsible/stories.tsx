import { faAngleDown } from "@fortawesome/pro-solid-svg-icons"; import { Collapsible as StoryComp } from "."; import { LOREM } from "../../mocks/LOREM.mock"; import { css } from "../../src/styles/utils/util_css.css"; import { Icon } from "../icon"; import type { StoryFn, StoryObj } from "@storybook/react"; import type { CollapsibleProps as StoryCompProps } from ".";

export default {
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/Collapsible",
};

const TriggerNode = (
	<button
		className={css({
			alignItems: "center",
			color: "text_high_contrast",
			display: "flex",
			width: "100%",
		})}
		type="button"
	>
		Open collapsible
		<Icon
			icon={faAngleDown}
		/**
		 * @todo Fix margin left in Collapsible
		 */
		// marginLeft="auto"
		/>
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
