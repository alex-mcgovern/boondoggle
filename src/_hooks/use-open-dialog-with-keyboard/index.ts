import type { MutableRefObject, RefObject } from "react";

import { useEffect } from "react";

import type { ElementTypeArg } from "../../types";

type UseOpenDialogWithKeyboardArgs<TTriggerType extends ElementTypeArg> = {
	callback: () => void;

	dialogRef:
		| MutableRefObject<HTMLDialogElement | undefined>
		| RefObject<HTMLDialogElement | undefined>;

	preventOpenOnKeydown?: boolean;

	triggerRef:
		| MutableRefObject<TTriggerType | undefined>
		| RefObject<TTriggerType | undefined>;
};

export function useOpenDialogWithKeyboard<TTriggerType extends ElementTypeArg>({
	callback,
	dialogRef,
	preventOpenOnKeydown,
	triggerRef,
}: UseOpenDialogWithKeyboardArgs<TTriggerType>) {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (preventOpenOnKeydown || dialogRef.current?.open) {
				return;
			}

			if (
				triggerRef.current === document.activeElement &&
				(event.key === "ArrowDown" || event.key === "Enter")
			) {
				/**
				 * Avoid accidentally triggering a form submission if used within form context
				 */
				// event.preventDefault();

				callback();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [callback, dialogRef, preventOpenOnKeydown, triggerRef]);
}
