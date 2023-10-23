import { amber, blue, green, red, slate } from "@radix-ui/colors";
import {
	assignVars,
	createGlobalTheme,
	styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeLayer } from "./layers.css";
import { makeTheme } from "./utils/make_theme";

export const color = createGlobalTheme(":root, ::backdrop", {
	...makeTheme({
		primary: blue,
		secondary: slate,
	}),
});

export const variantColorOverlay = styleVariants({
	amber: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({ primary: amber, secondary: amber }),
				),
			},
		},
	},
	blue: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({ primary: blue, secondary: blue }),
				),
			},
		},
	},
	default: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({
						primary: blue,
						secondary: slate,
					}),
				),
			},
		},
	},
	green: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({ primary: green, secondary: green }),
				),
			},
		},
	},
	grey: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({ primary: slate, secondary: slate }),
				),
			},
		},
	},
	red: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					color,
					makeTheme({ primary: red, secondary: red }),
				),
			},
		},
	},
});

export const getTheme = recipe({
	variants: {
		color: variantColorOverlay,
	},
});

export type ColorOverlay = keyof typeof variantColorOverlay;
