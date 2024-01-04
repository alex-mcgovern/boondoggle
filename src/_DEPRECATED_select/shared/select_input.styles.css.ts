import { globalStyle, style } from "@vanilla-extract/css";
import { inputSlotWrapperDoNotRemoveOrYouWillBeFired } from "../../_DEPRECATED_input/styles.css";

export const selectInputCursorStyles = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only`,
	{
		cursor: "pointer",
	},
);
