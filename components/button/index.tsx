import * as React from "react";
import clsx from "clsx";
import { Loader } from "../loader";
import { btn } from "./styles.css";
import { PolymorphicRef } from "../../src/common-types";
import { Placement } from "@floating-ui/react";
import {
	PolymorphicComponentPropWithRef,
	WithStateDisabled,
	WithSlots,
	WithTheme,
} from "../../src/common-types";
import { ElementSizeEnum } from "../../src/styles/common/element_size.css";

export type BaseButtonProps<TPolymorphicAs extends React.ElementType> =
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithStateDisabled &
		WithSlots & {
			/**
			 * Forces the button's active state
			 */
			active?: boolean;

			/**
			 * Controls the horizontal alignment of the button's content.
			 */
			alignment?: "center" | "left";
			/**
			 * Controls the button's variant.
			 */
			variant?: "primary" | "secondary" | "ghost";
			/**
			 * The React node shown in the button.
			 */
			children?: React.ReactNode;

			/**
			 * Whether to show a loader on first render
			 */
			isLoading?: boolean;

			/**
			 * The title for the button, shown in the UI.
			 */
			name: string;

			/**
			 * The size of the button.
			 */
			size?:
			| "square_md"
			| "square_sm"
			| "square_xs"
			| ElementSizeEnum;

			/**
			 * The tooltip to show on hover
			 */
			strTooltip?: string;

			/**
			 * The placement of the tooltip relative to the trigger.
			 */
			tooltipPlacement?: Placement;

			/**
			 * The HTML button type, defaults to `button`.
			 */
			type?: "button" | "submit" | "reset";
		} & WithTheme
	>;


export type ButtonComponent = <
	TPolymorphicAs extends React.ElementType = "button",
>(
	props: BaseButtonProps<TPolymorphicAs>,
) => React.ReactElement | null;


export type ButtonProps = React.ComponentProps<typeof Button>;



export const Button: ButtonComponent = React.forwardRef(
	<TPolymorphicAs extends React.ElementType = "button">(
		{
			active,
			alignment = "center",
			as,
			children,
			className: userClassName,
			color,
			disabled,
			gap,
			isLoading,
			size = "md",
			slotLeft,
			slotProps,
			slotRight,
			type = "button",
			variant = "primary",
			...rest
		}: BaseButtonProps<TPolymorphicAs>,
		ref?: PolymorphicRef<TPolymorphicAs>,
	) => {
		const Component = as || "button";
		return (
			<Component
				{...{
					"aria-disabled": disabled,
					className: clsx(
						btn({ alignment, variant, size, color }),
						userClassName,
					),
					"data-active": active,
					disabled: disabled || isLoading,
					ref,
					type,
					...rest,
				}}
			>
				{isLoading ? <Loader /> : slotLeft}
				{children}
				{slotRight}
			</Component>
		);
	},
);
