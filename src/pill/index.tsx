import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { ReactNode } from "react";
import { SlotWrapper } from "../slot-wrapper";
import { sprinkles } from "../sprinkles/index.css";
import {
	WithColorOverlay,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../types";
import { pillCSS } from "./styles.css";

export type PillProps = WithColorOverlay &
	WithStateDisabled &
	WithSize &
	WithSlots & {
		/**
		 * The react node rendered in the pill.
		 */
		children?: ReactNode;

		/**
		 * Used as the html class.
		 */
		className?: string;

		/**
		 * Used as the html ID.
		 */
		id?: string;

		/**
		 * Callback on click.
		 */
		onClick?(...args: unknown[]): unknown;
	};

export const Pill = ({
	children,
	className: userClassName,
	colorOverlay,
	id,
	size,
	slotLeft,
	slotRight,
	...rest
}: PillProps) => {
	/**
	 * Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract
	 */
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
