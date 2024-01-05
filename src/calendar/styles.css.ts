import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";
import { vars } from "../index.css";

export const calendarCSS = style([
	sprinkles({
		maxWidth: "100%",
		color: "text_high_contrast",
	}),
	{
		width: "fit-content",
	},
]);

export const calendarHeaderCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		marginX: "space_1",
		marginBottom: "space_1",
	}),
]);

export const calendarHeadingCSS = style([
	sprinkles({
		flexGrow: "1",
		margin: "none",
		textAlign: "center",
		fontStyle: "bodyMd",
	}),
]);

export const calendarGridHeaderCellCSS = style([
	sprinkles({
		// width: "space_8",
		height: "space_8",
		// aspectRatio: "square",

		fontStyle: "bodySm",
		fontWeight: "medium",
		textAlign: "center",

		// display: "flex",
		// placeItems: "center",
	}),
	{
		verticalAlign: "middle",
		// outline: "none",
		// cursor: "default",
		// margin: "1px",
		// forcedColorAdjust: "none",
	},
]);

export const calendarCellCSS = style([
	sprinkles({
		width: "space_8",
		height: "space_8",
		aspectRatio: "square",
		fontStyle: "bodySm",
		textAlign: "center",
		borderRadius: "sm",

		display: "flex",
		placeItems: "center",
	}),
	{
		cursor: "pointer",
		outline: "none",
		margin: "1px",
		forcedColorAdjust: "none",

		selectors: {
			"&[data-outside-month]": {
				display: "none",
			},

			"&[data-hovered]": {
				background: vars.color.btn_secondary_bg_highlighted,
			},

			"&[data-pressed]": {
				background: vars.color.btn_secondary_bg_highlighted,
			},

			"&[data-focus-visible]": {
				background: vars.color.btn_secondary_bg_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			"&[data-selected]": {
				background: vars.color.button_tint,
				color: vars.color.button_default,
			},
		},
	},
]);
