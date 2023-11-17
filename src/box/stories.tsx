import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons/faCheckCircle";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import type { StoryFn, StoryObj } from "@storybook/react";
import { Box, type BoxProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Link } from "../../test/link.comp.mock";
import { Icon } from "../icon";
import { type UtilCssArgs, variantColorOverlay } from "../index.css";

export default {
	component: Box,
	title: "Components/Box",
};

const Template: StoryFn<BoxProps> = ({
	children = "Inner content",
	...rest
}) => {
	return <Box {...rest}>{children}</Box>;
};

export const ExamplePolymorphismListItems: StoryObj<BoxProps> = {
	args: {
		as: "ul",
		children: [
			<Box as="li">List item 1</Box>,
			<Box as="li">List item 2</Box>,
			<Box as="li">List item 3</Box>,
		],
	},
	render: Template,
};

export const ExamplePolymorphismReactComponent: StoryObj<BoxProps> = {
	args: {
		as: Link,
		children: "I am a `Link` component",
		href: "https://google.com",
	},
	render: Template,
};

const BASIC_SPRINKLES_PROPS: UtilCssArgs = {
	background: "tint_default",
	border: "border_default",
	borderRadius: "sm",
	padding: "space_6",
};

export const ExampleBasicSprinkles: StoryObj<BoxProps> = {
	args: {
		...BASIC_SPRINKLES_PROPS,
		children: LOREM.text_xxs,
	},

	render: Template,
};

export const ExampleResponsiveSprinkles: StoryObj<BoxProps> = {
	args: {
		children: [<Box>Item 1</Box>, <Box>Item 2</Box>, <Box>Item 3</Box>],
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

export const ExampleEscapeHatchStyles: StoryObj<BoxProps> = {
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

export const BoxAsInfoCard: StoryObj<BoxProps> = {
	args: {
		background: "tint_default",
		border: "border_default",
		borderRadius: "sm",
		children: [
			<Box as="h3" fontSize="bodyLg" fontWeight="bold">
				{LOREM.text_xxs}
			</Box>,
			<Box as="p">{LOREM.text_md}</Box>,
		],
		padding: "space_6",
	},
	render: Template,
};

export const BoxAsWarning: StoryObj<BoxProps> = {
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
			<Box>
				<Box
					as="h3"
					color="text_low_contrast"
					fontSize="bodyLg"
					fontWeight="bold"
				>
					{LOREM.text_xxs}
				</Box>
				<Box as="p">{LOREM.text_md}</Box>
			</Box>,
		],
		className: variantColorOverlay.red,
		display: "flex",
		gap: "space_6",
		padding: "space_6",
	},

	render: Template,
};

export const BoxAsConfirmation: StoryObj<BoxProps> = {
	args: {
		alignItems: "start",
		background: "tint_default",
		border: "border_default",
		borderRadius: "sm",
		children: [
			<Icon color="text_low_contrast" icon={faCheckCircle} size="xl" />,
			<Box>
				<Box
					as="h3"
					color="text_low_contrast"
					fontSize="bodyLg"
					fontWeight="bold"
				>
					{LOREM.text_xxs}
				</Box>
				<Box as="p" color="text_high_contrast">
					{LOREM.text_md}
				</Box>
			</Box>,
		],
		className: variantColorOverlay.green,
		display: "flex",
		gap: "space_6",
		padding: "space_6",
	},
	render: Template,
};

export const BoxAsGridLayout: StoryObj<BoxProps> = {
	args: {
		children: [
			<Box background="tint_default" padding="space_6">
				Content 1
			</Box>,
			<Box background="tint_default" padding="space_6">
				Content 2
			</Box>,
			<Box background="tint_default" padding="space_6">
				Content 3
			</Box>,
		],
		display: "grid",
		gap: "space_6",
		gridTemplateColumns: "3x",
	},
	render: Template,
};
