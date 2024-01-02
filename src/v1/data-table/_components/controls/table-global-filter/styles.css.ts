import { style } from "@vanilla-extract/css";
import { CONTAINER_MD } from "../../../../../index.css";

export const tableGlobalFilterCSS = style({
	width: "100%",
	"@container": {
		[CONTAINER_MD]: {
			width: "12rem",
		},
	},
});
