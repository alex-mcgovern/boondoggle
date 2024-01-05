import { red, redA } from "@radix-ui/colors";
import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { inputBg } from "../_css/input.css";
import { makeTheme, withPrefersMotion } from "../css-utils";
import { a11yDisabled, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const groupCSS = style([
	a11yDisabled,
	inputBg,
	sprinkles({
		height: "space_8",
		width: "100%",

		display: "flex",
		alignItems: "center",

		border: "border_element",
		borderRadius: "md",

		fontStyle: "bodySm",
		position: "relative",

		overflow: "hidden",

		paddingX: "space_1",
	}),
	withPrefersMotion({
		transitionProperty: "color, background, border-color, outline, opacity",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		outline: "0px solid transparent",

		selectors: {
			/**
			 * Whether the group is currently hovered with a mouse.
			 */

			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},

			/**
			 * Whether an element within the group is focused, either via a mouse or keyboard
			 */

			"&[data-focus-within]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the group is keyboard focused.
			 */

			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the group is disabled.
			 */

			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the group is invalid.
			 */

			"&[data-invalid], &:has([data-invalid])": {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: red,
						secondary: red,
						alpha: redA,
						isOverlay: true,
					}),
				),
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
		},
	},
]);

globalStyle(`${groupCSS} > [data-can-group=true]`, {
	appearance: "none",
	background: "none !important",
	border: "none !important",
	font: "inherit !important",
	margin: "0 !important",
	outline: "none !important",
});
