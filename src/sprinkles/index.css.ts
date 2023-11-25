import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import {
	MEDIA_QUERY_DESKTOP,
	MEDIA_QUERY_TABLET,
	sprinklesLayer,
	vars,
} from "../index.css";

const border = {
	border_1: `1px solid ${vars.color.border_1}`,
	border_2: `1px solid ${vars.color.border_2}`,
	border_3: `1px solid ${vars.color.border_3}`,
	border_4: `1px solid ${vars.color.border_4}`,
};

export const properties = defineProperties({
	"@layer": sprinklesLayer,
	properties: {
		alignItems: ["stretch", "start", "center", "end", "baseline"],
		aspectRatio: vars.aspectRatio,
		background: {
			...vars.color,
			inherit: "inherit",
			transparent: "transparent",
		},
		border: border,
		borderBottom: border,
		borderLeft: border,
		borderTop: border,
		borderRight: border,
		borderRadius: vars.borderRadius,
		bottom: ["0"],
		boxShadow: vars.boxShadow,
		color: {
			...vars.color,
			currentColor: "currentColor",
			inherit: "inherit",
		},
		flex: ["0 1 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
		flexGrow: ["0", "1"],
		flexShrink: ["0", "1"],
		flexWrap: ["wrap", "nowrap"],
		fontSize: vars.fontSize,
		fontWeight: vars.fontWeight,
		height: { ...vars.height, ...vars.spacing },
		inset: ["0"],
		isolation: ["isolate"],
		justifyContent: [
			"stretch",
			"start",
			"center",
			"end",
			"space-around",
			"space-between",
		],
		left: ["0"],
		lineHeight: vars.lineHeight,
		margin: vars.spacing,
		marginBottom: vars.spacing,
		marginLeft: vars.spacing,
		marginRight: vars.spacing,
		marginTop: vars.spacing,
		maxHeight: { ...vars.height, ...vars.spacing },
		maxWidth: { ...vars.width, ...vars.spacing },
		minHeight: { ...vars.height, ...vars.spacing },
		minWidth: { ...vars.width, ...vars.spacing },
		overflowX: ["hidden", "auto", "visible", "scroll"],
		overflowY: ["hidden", "auto", "visible", "scroll"],
		right: ["0"],
		textAlign: ["center", "left", "right"],
		textWrap: ["balance"],
		textDecoration: ["underline", "none", "line-through"],
		textTransform: ["capitalize", "uppercase", "lowercase"],
		top: ["0"],
		whiteSpace: ["nowrap", "normal"],
		zIndex: ["-1", "1"],
	},
	shorthands: {
		fontStyle: ["fontSize", "lineHeight"],
		marginX: ["marginLeft", "marginRight"],
		marginY: ["marginTop", "marginBottom"],
		overflow: ["overflowX", "overflowY"],
		placeItems: ["alignItems", "justifyContent"],
	},
});

export const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: {
			"@media": MEDIA_QUERY_TABLET,
		},
		desktop: {
			"@media": MEDIA_QUERY_DESKTOP,
		},
	},
	defaultCondition: "mobile",
	properties: {
		display: vars.display,
		flexDirection: ["row", "column", "row-reverse", "column-reverse"],
		gap: vars.spacing,
		gridTemplateColumns: vars.gridTemplateColumns,
		padding: vars.spacing,
		paddingBottom: vars.spacing,
		paddingLeft: vars.spacing,
		paddingRight: vars.spacing,
		paddingTop: vars.spacing,
		position: ["relative", "absolute", "sticky", "static"],
		width: { ...vars.width, ...vars.spacing },
	},
	shorthands: {
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
	},
});

export const sprinkles = createSprinkles(properties, responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
