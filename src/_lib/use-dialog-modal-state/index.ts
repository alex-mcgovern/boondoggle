import { createRef, useCallback } from "react";

import { useClickOutside } from "../../_hooks/use-click-outside";
import { useForwardRef } from "../../_hooks/use-forward-ref";

import type { ForwardedRef } from "react";

type UseDialogModalStateArgs = {
	/**
	 * Ref to the HTML Dialog, used to open/close it with `.showModal()` & `.close()`
	 */
	ref: ForwardedRef<HTMLDialogElement> | undefined;
};

/**
 * Manages the state of a dialog modal.
 */
export function useDialogModalState({ ref }: UseDialogModalStateArgs) {
	const dialogRef = useForwardRef<HTMLDialogElement>(ref);

	const triggerRef = createRef<HTMLElement>();

	const openDialog = useCallback(() => {
		return dialogRef.current?.showModal();
	}, [dialogRef]);

	const closeDialog = useCallback(() => {
		return dialogRef.current?.close();
	}, [dialogRef]);

	const toggleIsOpen = useCallback(() => {
		if (!dialogRef.current) {
			return null;
		}

		return dialogRef.current?.open ? closeDialog() : openDialog();
	}, [closeDialog, dialogRef, openDialog]);

	useClickOutside<HTMLDialogElement, HTMLElement>({
		callback: closeDialog,
		contentRef: dialogRef,
		triggerRef,
	});

	return { closeDialog, dialogRef, toggleIsOpen, triggerRef };
}
