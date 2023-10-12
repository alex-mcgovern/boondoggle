import {
	faCheckCircle,
	faExclamationCircle,
} from "@fortawesome/pro-solid-svg-icons";

import { Box as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Link } from "../../../test/link.comp.mock";
import { variantColorOverlay } from "../../styles/theme.css";
import { Icon } from "../icon";

import type { StoryFn, StoryObj } from "@storybook/react";
import type { BoxProps as StoryCompProps } from ".";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

export default {
	component: StoryComp,
	title: "Components/Box",
};

const Template: StoryFn<StoryCompProps> = ({
	children = "Inner content",
	...rest
}) => {
	return <StoryComp {...rest}>{children}</StoryComp>;
};

export const ExamplePolymorphismListItems: StoryObj<StoryCompProps> = {
	args: {
		as: "ul",
		children: [
			<StoryComp as="li">List item 1</StoryComp>,
			<StoryComp as="li">List item 2</StoryComp>,
			<StoryComp as="li">List item 3</StoryComp>,
		],
	},
	render: Template,
};

export const ExamplePolymorphismReactComponent: StoryObj<StoryCompProps> = {
	args: {
		as: Link,
		children: "I am a `Link` component",
		href: "https://google.com",
	},
	render: Template,
};

const BASIC_SPRINKLES_PROPS: SprinklesArgs = {
	background: "tint_default",
	border: "border_default",
	borderRadius: "sm",
	padding: "space_6",
};

export const ExampleBasicSprinkles: StoryObj<StoryCompProps> = {
	args: {
		...BASIC_SPRINKLES_PROPS,
		children: LOREM.text_xxs,
	},

	render: Template,
};

export const ExampleResponsiveSprinkles: StoryObj<StoryCompProps> = {
	args: {
		children: [<StoryComp>Item 1</StoryComp>, <StoryComp>Item 2</StoryComp>, <StoryComp>Item 3</StoryComp>],
		display: "grid",
		gap: "space_6",
		gridTemplateColumns: {
			desktop: "3x",
			mobile: "1x",
			tablet: "2x",
		},
	},
	render: Template,
};

export const ExampleEscapeHatchStyles: StoryObj<StoryCompProps> = {
	args: {
		__background: "#BA55D330",
		__border: "1px solid #BA55D3",
		__borderRadius: "0.5rem",
		__color: "#BA55D3",
		__fontWeight: "bold",
		__padding: "1.5rem",
		children: LOREM.text_xxs,
	},
	render: Template,
};

export const BoxAsInfoCard: StoryObj<StoryCompProps> = {
	args: {
		background: "tint_default",
		border: "border_default",
		borderRadius: "sm",
		children: [
			<StoryComp as="h3" fontSize="bodyLg" fontWeight="bold">
				{LOREM.text_xxs}
			</StoryComp>,
			<StoryComp as="p">{LOREM.text_md}</StoryComp>,
		],
		padding: "space_6",
	},
	render: Template,
};

export const BoxAsWarning: StoryObj<StoryCompProps> = {
	args: {
		alignItems: "start",
		background: "tint_default",
		border: "border_default",
		borderRadius: "sm",
		children: [
			<Icon
				color="text_low_contrast"
				icon={faExclamationCircle}
				size="xl"
			/>,
			<StoryComp>
				<StoryComp
					as="h3"
					color="text_low_contrast"
					fontSize="bodyLg"
					fontWeight="bold"
				>
					{LOREM.text_xxs}
				</StoryComp>
				<StoryComp as="p">{LOREM.text_md}</StoryComp>
			</StoryComp>,
		],
		className: variantColorOverlay.red,
		display: "flex",
		gap: "space_6",
		padding: "space_6",
	},

	render: Template,
};

export const BoxAsConfirmation: StoryObj<StoryCompProps> = {
	args: {
		alignItems: "start",
		background: "tint_default",
		border: "border_default",
		borderRadius: "sm",
		children: [
			<Icon color="text_low_contrast" icon={faCheckCircle} size="xl" />,
			<StoryComp>
				<StoryComp
					as="h3"
					color="text_low_contrast"
					fontSize="bodyLg"
					fontWeight="bold"
				>
					{LOREM.text_xxs}
				</StoryComp>
				<StoryComp as="p" color="text_high_contrast">
					{LOREM.text_md}
				</StoryComp>
			</StoryComp>,
		],
		className: variantColorOverlay.green,
		display: "flex",
		gap: "space_6",
		padding: "space_6",
	},
	render: Template,
};

export const BoxAsGridLayout: StoryObj<StoryCompProps> = {
	args: {
		children: [
			<StoryComp background="tint_default" padding="space_6">
				Content 1
			</StoryComp>,
			<StoryComp background="tint_default" padding="space_6">
				Content 2
			</StoryComp>,
			<StoryComp background="tint_default" padding="space_6">
				Content 3
			</StoryComp>,
		],
		display: "grid",
		gap: "space_6",
		gridTemplateColumns: "3x",
	},
	render: Template,
};
