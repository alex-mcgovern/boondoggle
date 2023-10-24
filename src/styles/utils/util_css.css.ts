import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { DESKTOP, TABLET, utilCssLayer, v } from "../../../style.css";

/**
 * Util function for extracting color vars for use with a sprinkles property
 */
export const utilCssProperties = defineProperties({
	"@layer": utilCssLayer,
	properties: {
		alignItems: ["stretch", "start", "center", "end", "baseline"],
		aspectRatio: v.aspectRatio,
		background: {
			...v.color,
			inherit: "inherit",
			transparent: "transparent",
		},
		border: {
			border_default: `1px solid ${v.color.border_default}`,
			border_hover: `1px solid ${v.color.border_hover}`,
		},
		borderBottom: v.border,
		borderLeft: v.border,
		borderRadius: v.radius,
		borderRight: v.border,
		borderTop: v.border,
		bottom: ["0"],
		boxShadow: v.boxShadow,
		color: {
			...v.color,
			currentColor: "currentColor",
			inherit: "inherit",
		},
		flex: ["0 1 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
		flexGrow: ["0", "1"],
		flexShrink: ["0", "1"],
		flexWrap: ["wrap", "nowrap"],
		fontSize: v.fontSize,
		fontWeight: v.fontWeight,
		height: { ...v.height, ...v.spacing },
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
		lineHeight: v.lineHeight,
		margin: v.spacing,
		marginBottom: v.spacing,
		marginLeft: v.spacing,
		marginRight: v.spacing,
		marginTop: v.spacing,
		maxHeight: { ...v.height, ...v.spacing },
		maxWidth: { ...v.width, ...v.spacing },
		minHeight: { ...v.height, ...v.spacing },
		minWidth: { ...v.width, ...v.spacing },
		overflowX: ["hidden", "auto", "visible", "scroll"],
		overflowY: ["hidden", "auto", "visible", "scroll"],
		right: ["0"],
		textAlign: ["center", "left", "right"],
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

export const responsiveUtilCssProperties = defineProperties({
	/**
	 * @note The ordering of conditions is important
	 */
	conditions: {
		mobile: {},
		tablet: {
			"@media": TABLET,
		},
		desktop: {
			"@media": DESKTOP,
		},
	},
	defaultCondition: "mobile",
	properties: {
		display: v.display,
		flexDirection: ["row", "column", "row-reverse", "column-reverse"],
		gap: v.spacing,
		gridTemplateColumns: v.gridTemplateColumns,
		padding: v.spacing,
		paddingBottom: v.spacing,
		paddingLeft: v.spacing,
		paddingRight: v.spacing,
		paddingTop: v.spacing,
		position: ["relative", "absolute", "sticky", "static"],
		width: { ...v.width, ...v.spacing },
	},
	shorthands: {
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
	},
});

export const css = createSprinkles(
	utilCssProperties,
	responsiveUtilCssProperties,
);

export type UtilCssArgs = Parameters<typeof css>[0];
