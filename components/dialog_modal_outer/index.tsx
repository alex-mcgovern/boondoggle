import { Box } from "../box";
import { getDialogModalOuterStyle } from "./styles.css";

import type { ForwardedRef, ReactNode } from "react";

type DialogModalOuterProps = {
	/**
	 * Children of the dialog element. Intended to accept only `DialogModalInner` component.
	 */
	children: ReactNode;

	/**
	 * React ref that allows control of the dialog's open state.
	 */
	dialogRef: ForwardedRef<HTMLDialogElement>;

	/**
	 * Whether the dialog is open or not.
	 */
	isOpen?: boolean;
};

/**
 * Renders a html dialog element and allows toggling the dialog's open state.
 */
export function DialogModalOuter({
	children,
	dialogRef,
	isOpen,
}: DialogModalOuterProps) {
	return (
		<Box
			as="dialog"
			className={getDialogModalOuterStyle()}
			open={isOpen}
			ref={dialogRef}
		>
			{children}
		</Box>
	);
}
