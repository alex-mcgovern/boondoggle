import { style } from "@vanilla-extract/css";
import { createAccessibleTransition, vars } from "../../index.css";

export const icon = style([
	createAccessibleTransition({
		transition: `transform color ${vars.transitionDuration.short} ease`,
	}),
]);
