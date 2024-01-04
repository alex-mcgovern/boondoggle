import { style } from "@vanilla-extract/css";
import { floatingMenu } from "../../index.css";
import { sprinkles } from "../../__DONE__sprinkles/index.css";

export const menuSeparatorCSS = style([
	sprinkles({
		marginY: "space_1",
		background: "border_rule",
	}),
	{
		height: "1px",
		marginLeft: floatingMenu.item.paddingX,
		marginRight: floatingMenu.item.paddingX,
	},
]);
