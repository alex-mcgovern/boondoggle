import { Children, forwardRef } from "react";
import { Box } from "../box";
import { getSlotStyles } from "./styles.css";
import type { ReactNode, Ref } from "react";
import type { WithSlots } from "../../src/common-types";
import type { ElementSizeEnum } from "../../src/styles/common/element_size.css";
import type { BoxProps } from "../box";

export type SlotWrapperProps = BoxProps &
	WithSlots & {
		children?: ReactNode;
		className?: string;
		size: ElementSizeEnum | undefined;
		slotProps?: BoxProps;
	};

export const SlotWrapper = forwardRef(
	(
		{
			children,
			className: userClassName,
			size = "md",
			slotLeft,
			gap = "space_2",
			slotProps,
			slotRight,
			...rest
		}: SlotWrapperProps,
		ref: Ref<HTMLDivElement>,
	) => {
		return (
			<Box
				alignItems="center"
				className={userClassName}
				display="flex"
				gap={gap}
				ref={ref}
				{...rest}
			>
				{slotLeft && (
					<Box
						{...slotProps}
						className={getSlotStyles({ size })}
						color="inherit"
						flexShrink="0"
					>
						{Children.map(slotLeft, (child) => {
							return child;
						})}
					</Box>
				)}

				{children}

				{slotRight && (
					<Box
						{...slotProps}
						className={getSlotStyles({ size })}
						color="inherit"
						flexShrink="0"
					>
						{Children.map(slotRight, (child) => {
							return child;
						})}
					</Box>
				)}
			</Box>
		);
	},
);
