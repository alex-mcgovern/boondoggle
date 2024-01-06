import { style } from "@vanilla-extract/css";

import { CONTAINER_MD } from "../../../../index.css";

export const tableGlobalFilterCSS = style({
	"@container": {
		[CONTAINER_MD]: {
			width: "12rem",
		},
	},
	width: "100%",
});
