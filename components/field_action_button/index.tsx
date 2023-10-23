import clsx from "clsx";
import { forwardRef, useCallback } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";
import { fieldActionButtonStyle } from "./styles.css";

import type { MouseEvent, MouseEventHandler, ReactNode } from "react";

type BaseButtonProps = {
	/**
	 * Custom CSS class to apply to the button.
	 */
	className: string | undefined;

	/**
	 * Whether the button is disabled.
	 */
	disabled?: boolean;

	/**
	 * The name of the button.
	 */
	name: string;

	/**
	 * The function to call when the button is clicked.
	 */
	onClick: MouseEventHandler<HTMLButtonElement>;

	/**
	 * The slot to render on the button.
	 */
	slot: ReactNode;
};

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	({ className, name, onClick, slot, ...rest }, ref) => {
		return (
			<button
				className={clsx(fieldActionButtonStyle, className)}
				name={name}
				onClick={onClick}
				ref={ref}
				type="button"
				{...rest}
			>
				{slot}
			</button>
		);
	},
);

export type FieldActionButtonProps = {
	/**
	 * Custom CSS class to apply to the button.
	 */
	className?: string;

	/**
	 * Whether the button is disabled.
	 */
	disabled?: boolean;

	/**
	 * The name of the button.
	 */
	name: string;

	/**
	 * The function to call when the button is clicked.
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>;

	/**
	 * The slot to render on the button.
	 */
	slot: ReactNode;

	/**
	 * The tooltip text to display when the button is hovered.
	 */
	strTooltip?: string;
};

/**
 * A configurable button for use within a field.
 */
export const FieldActionButton = forwardRef<
	HTMLButtonElement,
	FieldActionButtonProps
>(({ className, disabled, name, onClick, slot, strTooltip, ...rest }, ref) => {
	const handleClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			onClick?.(e);

			// Prevent the click event from bubbling up to the parent element.
			e.stopPropagation();
		},
		[onClick],
	);

	if (!strTooltip) {
		return (
			<BaseButton
				className={className}
				disabled={disabled}
				name={name}
				onClick={handleClick}
				ref={ref}
				slot={slot}
				{...rest}
			/>
		);
	}

	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<BaseButton
					className={className}
					disabled={disabled}
					name={name}
					onClick={handleClick}
					ref={ref}
					slot={slot}
					{...rest}
				/>
			</TooltipTrigger>
			<TooltipContent>{strTooltip}</TooltipContent>
		</Tooltip>
	);
});
