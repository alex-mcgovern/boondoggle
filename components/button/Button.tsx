import * as React from "react";
import clsx from "clsx";
import { Loader } from "../loader";
import { getButtonStyles } from "./Button.css";
import { BaseButtonProps, ButtonComponent } from "./types";
import { PolymorphicRef } from "../../src/common-types";

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
						getButtonStyles({ alignment, variant, size, color }),
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
