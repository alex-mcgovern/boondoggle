import clsx from "clsx";
import * as React from "react";
import {
	Button as RACButton,
	ButtonProps as RACButtonProps,
	Link as RACLink,
	LinkProps as RACLinkProps,
} from "react-aria-components";
import { ButtonVariants, buttonCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------------- */

export type ButtonProps = RACButtonProps & ButtonVariants;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			alignment = "center",
			appearance = "primary",
			className,
			size = "sm",
			colorOverlay,
			...props
		},
		ref,
	) => {
		return (
			<RACButton
				{...props}
				ref={ref}
				className={clsx(
					className,
					buttonCSS({ appearance, size, alignment, colorOverlay }),
				)}
			/>
		);
	},
);

/** -----------------------------------------------------------------------------
 * LinkButton
 * ------------------------------------------------------------------------------- */

export type LinkButtonProps = RACLinkProps & ButtonVariants;

export const LinkButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(
	(
		{
			alignment = "center",
			appearance = "primary",
			className,
			size = "sm",
			colorOverlay,
			...props
		},
		ref,
	) => {
		return (
			<RACLink
				{...props}
				ref={ref}
				className={clsx(
					className,
					buttonCSS({ appearance, size, alignment, colorOverlay }),
				)}
			/>
		);
	},
);
