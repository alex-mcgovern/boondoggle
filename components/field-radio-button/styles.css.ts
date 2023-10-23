import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../src/styles/common/a11y.css";
import { vars } from "../../src/styles/theme.css";
import { createAccessibleTransition } from "../../src/styles/utils/create_accessible_transition";
import { utilCss } from "../../src/styles/utils/util_css.css";

export const radioButtonWrapperStyles = style([
	utilCss({
		alignItems: "start",
		borderRadius: "sm",
		display: "flex",
		gap: "space_2",
	}),
]);

export const radioButtonInputStyles = style([
	a11yFocus,
	utilCss({ borderRadius: "50%", marginTop: "space_2" }),
]);

export const radioButtonLabelStyles = style([
	{
		...createAccessibleTransition({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		accentColor: vars.color.button_default,
		selectors: {
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
]);
