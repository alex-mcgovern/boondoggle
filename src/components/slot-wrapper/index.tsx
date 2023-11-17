import { Children, forwardRef } from "react";
import type { ReactNode, Ref } from "react";
import type { WithSlots } from "../../common-types";
import { Box } from "../box";
import type { BoxProps } from "../box";
import * as styles from "./styles.css";

export type SlotWrapperProps = BoxProps &
	WithSlots & {
		children?: ReactNode;

		className?: string;

		slotProps?: BoxProps;
	};

export const SlotWrapper = forwardRef(
	(
		{
			children,
			className: userClassName,
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
						className={styles.slot}
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
						className={styles.slot}
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
