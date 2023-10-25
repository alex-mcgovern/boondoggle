import { Box } from "../../box/Box"; import { getDialogModalInnerStyle } from "./DialogModalInner.css";
import type { ReactNode } from "react"; import type { BoxProps } from "../../box/Box"; import type { DialogModalInnerWidth } from "./DialogModalInner.css";
type DialogModalInnerProps = {
	/**
	 * Elements rendered in the dialog; the header, alert, content, and any actions components.
	 */
	children: ReactNode;
	/**
	 * Controls the width of the dialog from one of 2 pre-defined ranges. Scales to full-screen on mobile viewports.
	 */
	width: DialogModalInnerWidth;
} & Omit<BoxProps, "width">;

/**
 * Wraps the inner content of a dialog, and allows customisation, e.g. returning a form element instead of a div.
 */

export function DialogModalInner({
	children,
	width,
	...rest
}: DialogModalInnerProps) {
	return (
		<Box className={getDialogModalInnerStyle({ width })} {...rest}>
			{children}
		</Box>
	);
}
