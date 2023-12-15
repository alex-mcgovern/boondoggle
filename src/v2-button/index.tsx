import clsx from "clsx";
import * as React from "react";
import { Button as ReactAriaButton } from "react-aria-components";
import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components";
import { ColorOverlay, variantColorOverlay } from "../index.css";
import { buttonCSS } from "./styles.css";
export type ButtonProps = ReactAriaButtonProps & {
	"data-slot-side"?: "right" | "left";
	colorOverlay?: ColorOverlay;
	alignment?: "left" | "center";
	appearance?: "primary" | "secondary" | "ghost";
	size?: "lg" | "md" | "sm" | "xs" | "square_lg" | "square_md" | "square_sm";
};

export const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			alignment = "center",
			appearance = "primary",
			className,
			size = "sm",
			colorOverlay,
			...rest
		},
		ref,
	) => {
		return (
			<ReactAriaButton
				ref={ref}
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
