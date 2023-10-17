import clsx from "clsx";
import React from "react";

import { Box } from "../box/Box";
import { SlotWrapper } from "../slot_wrapper";
import { getSelectItemStyles, isHighlightedStyle } from "./SelectItem.css";

import type { Ref } from "react";
import type { WithColorOverlay, WithSize, WithSlots } from "../../common-types";
import type { BoxProps } from "../box/Box";

export type SelectItemProps = BoxProps &
	WithColorOverlay &
	WithSize &
	Omit<WithSlots, "slotRight"> & {
		/**
		 * The description for the item.
		 */
		description: string | undefined;

		/**
		 * Whether the item is highlighted.
		 */
		isHighlighted: boolean | undefined;

		/**
		 * Whether the parent component allows multiple selection or not.
		 */
		isMulti: boolean | undefined;

		/**
		 * Whether the item is selected.
		 */
		isSelected?: boolean;

		/**
		 * The label to display for the item.
		 */
		label: string;

		/**
		 * The value of the item.
		 */
		value: string;
	};

export const SelectItem = React.forwardRef(
	(
		{
			as = "li",
			colorOverlay,
			description,
			isHighlighted,
			isMulti,
			isSelected,
			label,
			size,
			slotLeft,
			...rest
		}: SelectItemProps,
		ref: Ref<HTMLDivElement>,
	) => {
		return (
			<SlotWrapper
				as={as}
				className={clsx(
					getSelectItemStyles({
						colorOverlay,
						size,
					}),
					{
						[isHighlightedStyle]: isHighlighted,
					},
				)}
				id={label}
				ref={ref}
				size={size}
				slotLeft={slotLeft}
				{...rest}
			>
				<Box flexShrink="0">
					<Box
						__lineHeight="1.2"
						color="text_high_contrast"
						fontSize="bodyMd"
					>
						{label}
					</Box>
					<Box color="text_low_contrast" fontStyle="bodySm">
						{description}
					</Box>
				</Box>
				{isMulti && (
					<Box
						as="input"
						checked={isSelected}
						marginLeft="auto"
						readOnly
						tabIndex={-1}
						type="checkbox"
					/>
				)}
			</SlotWrapper>
		);
	},
);
