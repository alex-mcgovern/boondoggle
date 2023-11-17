import * as RadixSlot from "@radix-ui/react-slot";
import clsx from "clsx";
import { createRef, forwardRef, useCallback } from "react";

import { useClickOutside } from "../../hooks/use-click-outside";
import { useOpenDialogWithKeyboard } from "../../hooks/use-open-dialog-with-keyboard";
import { useForwardRef } from "../../hooks/use-forward-ref";
import { Box } from "../box";
import { getDialogStyles } from "./styles.css";

import type { ReactNode } from "react";
import type { BoxProps } from "../box";
import type { DialogPlacementEnum } from "./styles.css";

export type DialogProps = BoxProps & {
	/**
	 * Children to render inside the dialog component.
	 */
	children?: ReactNode;

	/**
	 * Optional CSS class name applied to the outer HTML dialog element.
	 */
	className?: string;

	/**
	 * Whether the dialog is "inert" (can't be focused, can't be clicked.)
	 */
	inert?: boolean;

	/**
	 * Controls the dialog's open state, making it a controlled element. Use alongside `onIsOpenChange`.
	 */
	isOpen?: boolean;

	/**
	 * Callback when the dialog's open state is changed. Use alongside `isOpen`.
	 */
	onIsOpenChange?: (isOpen?: boolean) => void;

	/**
	 * Controls the interaction mode for the dialog trigger node.
	 */
	openOn?: "click" | "hover";

	/**
	 * Controls the dialog's placement relative to the trigger node.
	 */
	placement?: DialogPlacementEnum;

	/**
	 * Whether to open the dialog on an enter keypress while the trigger node is focused.
	 */
	preventOpenOnKeydown?: boolean;

	/**
	 * The react node to act as the trigger for the dialog.
	 */
	triggerNode?: ReactNode;

	/**
	 * `BoxProps` to pass to the outer element that wraps the dialog and it's trigger.
	 */
	wrapperProps?: BoxProps;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
	(
		{
			children,
			className: userClassName,
			isOpen: controlledIsOpen,
			onIsOpenChange,
			openOn = "click",
			placement,
			preventOpenOnKeydown = false,
			triggerNode,
			wrapperProps,
			...rest
		}: DialogProps,
		ref,
	) => {
		const dialogRef = useForwardRef<HTMLDialogElement>(ref);

		const triggerRef = createRef<HTMLElement>();

		const toggleIsOpen = useCallback(() => {
			if (!dialogRef.current) {
				return;
			}

			if (dialogRef.current?.open) {
				dialogRef.current?.close();
			}

			if (!dialogRef.current?.open) {
				dialogRef.current?.show();
			}

			onIsOpenChange?.(dialogRef.current?.open);
		}, [dialogRef, onIsOpenChange]);

		useOpenDialogWithKeyboard<HTMLElement>({
			callback: toggleIsOpen,
			dialogRef,
			preventOpenOnKeydown,
			triggerRef,
		});

		useClickOutside<HTMLDialogElement, HTMLElement>({
			callback: () => {
				return dialogRef.current?.close();
			},
			contentRef: dialogRef,
			triggerRef,
		});

		return (
			<Box position="relative" {...wrapperProps}>
				<Box background="transparent">
					<RadixSlot.Slot
						onClick={toggleIsOpen}
						onMouseEnter={
							openOn === "hover"
								? () => {
										return dialogRef.current?.show();
								  }
								: undefined
						}
						onMouseLeave={
							openOn === "hover"
								? () => {
										return dialogRef.current?.close();
								  }
								: undefined
						}
						onPointerEnter={
							openOn === "hover"
								? () => {
										return dialogRef.current?.show();
								  }
								: undefined
						}
						onPointerLeave={
							openOn === "hover"
								? () => {
										return dialogRef.current?.show();
								  }
								: undefined
						}
						onPointerOver={
							openOn === "hover"
								? () => {
										return dialogRef.current?.show();
								  }
								: undefined
						}
						ref={triggerRef}
					>
						{triggerNode}
					</RadixSlot.Slot>
				</Box>
				<Box
					{...rest}
					as="dialog"
					className={clsx(
						userClassName,
						getDialogStyles({ placement }),
					)}
					open={controlledIsOpen}
					ref={dialogRef}
				>
					<Box>{children}</Box>
				</Box>
			</Box>
		);
	},
);
