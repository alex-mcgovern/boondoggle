import { recipe } from "@vanilla-extract/recipes";
import { ACTIVE, vars } from "../index.css";

const {
	button_inset_bottom_shadow,
	button_inset_top_highlight,
	btn_top_pressed,
	btn_bottom_pressed,
	btn_bottom_edge,
	sm,
} = vars.boxShadow;

export const buttonShadow = recipe({
	base: {},
	defaultVariants: {
		style: "all",
	},
	variants: {
		style: {
			"inner-only": {
				boxShadow: `${button_inset_top_highlight},\
                            ${button_inset_bottom_shadow}`,

				selectors: {
					[`&${ACTIVE}`]: {
						boxShadow: `${btn_top_pressed},\
									${btn_bottom_pressed}`,
					},
				},
			},
			"outer-only": {
				boxShadow: sm,
			},
			all: {
				boxShadow: `${button_inset_top_highlight},\
                            ${button_inset_bottom_shadow},\
                            ${btn_bottom_edge},\
                            ${sm}`,

				selectors: {
					[`&${ACTIVE}`]: {
						boxShadow: `${btn_top_pressed},\
									${btn_bottom_pressed},
                                    ${sm}`,
					},
				},
			},
		},
	},
});
