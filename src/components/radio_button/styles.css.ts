import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const radioButtonWrapperStyles = style([
	getSprinkles({
		alignItems: "start",
		borderRadius: "sm",
		display: "flex",
		gap: "space_2",
	}),
]);

export const radioButtonInputStyles = style([
	a11yFocus,
	getSprinkles({ borderRadius: "50%", marginTop: "space_2" }),
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
