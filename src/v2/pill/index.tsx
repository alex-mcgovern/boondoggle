import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { ReactNode } from "react";
import { ColorOverlay } from "../../index.css";
import { SlotWrapper } from "../../v1/slot-wrapper";
import { sprinkles } from "../../v1/sprinkles/index.css";
import { pillCSS } from "./styles.css";

export const Pill = ({
	children,
	className: userClassName,
	colorOverlay,
	id,
	size = "sm",
	slotLeft,
	slotRight,
	...rest
}: {
	children?: ReactNode;
	className?: string;
	colorOverlay?: ColorOverlay;
	id?: string;
	size?: "sm" | "md" | "lg";
	slotLeft?: ReactNode;
	slotRight?: ReactNode;
}) => {
	const { atomProps, otherProps } = extractAtomsFromProps(rest, sprinkles);

	return (
		<div
			{...{
				className: clsx(
					userClassName,
					pillCSS({ colorOverlay }),
					sprinkles({
						...atomProps,
						paddingLeft: slotLeft ? "space_1" : "space_2",
						paddingRight: slotRight ? "space_1" : "space_2",
					}),
				),
				id,
				...otherProps,
			}}
		>
			<SlotWrapper
				color="inherit"
				gap={"space_0"}
				size={size}
				slotLeft={slotLeft}
				slotRight={slotRight}
			>
				{children}
			</SlotWrapper>
		</div>
	);
};
