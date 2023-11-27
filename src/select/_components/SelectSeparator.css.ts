import { recipe } from "@vanilla-extract/recipes";
import { floatingMenuVars } from "../../index.css";
import { sprinkles } from "../../sprinkles/index.css";

export const getSeparatorStyle = recipe({
	base: [
		sprinkles({
			borderBottom: "border_2",
		}),
	],
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			lg: {
				margin: `${floatingMenuVars.menuPadding} ${floatingMenuVars.itemPaddingXLg}`,
			},

			md: {
				margin: `${floatingMenuVars.menuPadding} ${floatingMenuVars.itemPaddingXMd}`,
			},

			sm: {
				margin: `${floatingMenuVars.menuPadding} ${floatingMenuVars.itemPaddingXSm}`,
			},
		},
	},
});
