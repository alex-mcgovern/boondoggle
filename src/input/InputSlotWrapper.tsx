import clsx from "clsx";
import * as React from "react";
import { type ElementSizeEnum, a11yError } from "../index.css";
import { WithSlots, WithStateDisabled } from "../types";
import { getSlotWrapperStyles } from "./styles.css";

/**
 * Renders a wrapper around the input and its slots.
 */
export const InputSlotWrapper = React.forwardRef<
	HTMLDivElement,
	WithSlots &
		WithStateDisabled & {
			/**
			 * The children to render inside the wrapper.
			 */
			children: React.ReactNode;

			/**
			 * Any additional CSS classes to apply to the wrapper.
			 */
			className: string | undefined;

			/**
			 * Method to focus the input element.
			 */
			focus: () => void;

			/**
			 * Whether the input should have a border.
			 */
			hasBorder: boolean | undefined;

			/**
			 * Whether the input is invalid.
			 */
			invalid: boolean | undefined;

			/**
			 * Method to call the input elements onClick handler.
			 */
			onClick: React.MouseEventHandler<HTMLInputElement> | undefined;

			/**
			 * The size of the input.
			 */
			size: ElementSizeEnum | undefined;
		}
>(
	(
		{
			children,
			className,
			disabled,
			focus,
			hasBorder,
			invalid,
			onClick,
			size,
			slotLeft,
			slotRight,
		},
		ref,
	) => {
		const handleClick = React.useCallback(
			(e: React.MouseEvent<HTMLElement>) => {
				focus();
				onClick?.(e as React.MouseEvent<HTMLInputElement>);
				e.stopPropagation();
			},
			[focus, onClick],
		);

		return (
			// biome-ignore lint/a11y/useKeyWithClickEvents: This is a click event that is not a button.
			<div
				aria-disabled={disabled}
				className={clsx(
					getSlotWrapperStyles({
						hasBorder,
						hasSlotLeft: !!slotLeft,
						hasSlotRight: !!slotRight,
						size,
					}),
					className,
					{
						[a11yError]: invalid,
					},
				)}
				onClick={handleClick}
				ref={ref}
			>
				{slotLeft}
				{children}
				{slotRight}
			</div>
		);
	},
);
