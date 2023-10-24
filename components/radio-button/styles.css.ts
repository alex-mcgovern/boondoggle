import { style } from "@vanilla-extract/css";
import { focus, motion, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

export const radioButtonWrapperStyles = style([
	css({
		alignItems: "start",
		borderRadius: "sm",
		display: "flex",
		gap: "space_2",
	}),
]);

export const radioButtonInputStyles = style([
	focus,
	css({ borderRadius: "50%", marginTop: "space_2" }),
]);

export const radioButtonLabelStyles = style([
	{
		...motion({
			transition: `border-color ${v.duration.short} ease, background ${v.duration.short} ease`,
		}),
		accentColor: v.color.btn_default,
		selectors: {
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
]);
