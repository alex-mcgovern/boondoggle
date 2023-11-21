import { useEffect } from "react";
import type { MutableRefObject, RefObject } from "react";
import type { ElementTypeArg } from "../../types";

type UseClickOutsideArgs<
	TContentType extends ElementTypeArg,
	TTriggerType extends ElementTypeArg,
> = {
	callback: () => void;

	contentRef:
		| RefObject<TContentType | undefined>
		| MutableRefObject<TContentType | undefined>;

	triggerRef?:
		| RefObject<TTriggerType | undefined>
		| MutableRefObject<TTriggerType | undefined>;
};

export function useClickOutside<
	TContentType extends ElementTypeArg,
	TTriggerType extends ElementTypeArg,
>({
	callback,
	contentRef,
	triggerRef,
}: UseClickOutsideArgs<TContentType, TTriggerType>) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent): void {
			if (triggerRef?.current?.contains(event.target as Node)) {
				return;
			}
			if (
				!contentRef?.current?.contains(event.target as Node) ||
				(event?.target as HTMLDialogElement).nodeName === "DIALOG"
			) {
				callback();
			}
		}
		function handleEscape(event: KeyboardEvent): void {
			if (event.key === "Escape") {
				callback();
			}
		}

		/**
		 * Bind event listeners
		 */
		document.addEventListener("mousedown", handleClickOutside);

		document.addEventListener("keydown", handleEscape);

		/**
		 * Unbind event listeners
		 */
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);

			document.removeEventListener("keydown", handleEscape);
		};
	}, [triggerRef, callback, contentRef]);
}
