import { Box } from "../../../box/_components/Box";
import {
	dialogContentOuterStyle,
	getDialogContentInnerStyle,
} from "./styles.css";

import type { ReactNode } from "react";

type DialogModalContentProps = {
	/**
	 * An Alert shown at the top of the dialog modal component.
	 */
	alert?: ReactNode;

	/**
	 * The content shown within the dialog.
	 */
	children: ReactNode;

	/**
	 * Whether the dialog content has the same padding as the other dialog elements.
	 */
	hasPadding?: boolean;
};

/**
 * Renders a scrollable container for dialog content.
 */
export function DialogModalContent({
	alert,
	children,
	hasPadding = true,
}: DialogModalContentProps) {
	return (
		<Box className={dialogContentOuterStyle}>
			{alert && alert}
			<Box className={getDialogContentInnerStyle({ hasPadding })}>
				{children}
			</Box>
		</Box>
	);
}
