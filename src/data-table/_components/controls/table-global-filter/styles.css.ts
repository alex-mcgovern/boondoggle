import { style } from "@vanilla-extract/css";
import { MEDIA_QUERY_TABLET } from "../../../../index.css";

export const tableGlobalFilterCSS = style({
	width: "100%",
	"@media": {
		[MEDIA_QUERY_TABLET]: {
			width: "12rem",
		},
	},
});
