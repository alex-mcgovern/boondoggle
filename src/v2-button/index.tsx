import clsx from "clsx";
import * as React from "react";
import { Button as ReactAriaButton } from "react-aria-components";
import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components";
import { ColorOverlay, variantColorOverlay } from "../index.css";
import { buttonCSS } from "./styles.css";

export const Button = React.forwardRef(
	({
		alignment = "center",
		appearance = "secondary",
		className,
		size = "sm",
		colorOverlay,
		...rest
	}: ReactAriaButtonProps & {
		colorOverlay?: ColorOverlay;
		alignment?: "left" | "center";
		appearance?: "primary" | "secondary" | "ghost";
		size?: "lg" | "md" | "sm" | "square_md" | "square_sm" | "square_xs";
	}) => {
		return (
			<ReactAriaButton
				className={clsx(
					className,
					colorOverlay
						? variantColorOverlay[colorOverlay]
						: undefined,
					buttonCSS({ appearance, size, alignment, colorOverlay }),
				)}
				{...rest}
			/>
		);
	},
);
