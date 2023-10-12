import { Box } from "../box";
import { getDialogModalInnerStyle } from "./styles.css";

import type { BoxProps } from "../box";
import type { DialogModalInnerWidth } from "./styles.css";
import type { ReactNode } from "react";

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
