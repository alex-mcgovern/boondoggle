import { style } from "@vanilla-extract/css";
import { vars } from "../index.css";
import { withPrefersMotion } from "../css-utils";

export const iconCSS = style([
	withPrefersMotion({
		transition: `transform color ${vars.transitionDuration.short} ease`,
	}),
]);