import { style } from "@vanilla-extract/css";
import { motion, v } from "../../style.css";

export const icon = style([
	motion({
		transition: `transform ${v.duration.short} ease`,
	}),
]);
