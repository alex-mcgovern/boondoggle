import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";

export const iconCSS = style([
	withPrefersMotion({
		transition: `transform color ${vars.transitionDuration.short} ease`,
	}),
]);
