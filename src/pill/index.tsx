import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import type {
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement,
	ReactNode,
} from "react";
import { a11yFocus } from "../index.css";
import { SlotWrapper } from "../slot-wrapper";
import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
	WithColorOverlay,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../types";
import { pillCSS } from "./styles.css";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";

type BasePillProps<TPolymorphicAs extends ElementType> = Sprinkles &
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithColorOverlay &
			WithStateDisabled &
			WithSize &
			WithSlots & {
				/**
				 * The react node rendered in the pill.
				 */
				children?: ReactNode;

				/**
				 * Used as the html ID.
				 */
				id?: string;

				/**
				 * Callback on click.
				 */
				onClick?(...args: unknown[]): unknown;
			}
	>;

type PillComponent = <TPolymorphicAs extends ElementType = "div">(
	props: BasePillProps<TPolymorphicAs>,
) => ReactElement | null;

export type PillProps = ComponentPropsWithoutRef<typeof Pill>;

export const Pill: PillComponent = forwardRef(
	<TPolymorphicAs extends ElementType = "span">(
		{
			as,
			children,
			className: userClassName,
			colorOverlay,
			id,
			size,
			slotLeft,
			slotRight,
			...rest
		}: BasePillProps<TPolymorphicAs>,
		ref?: PolymorphicRef<TPolymorphicAs>,
	) => {
		/**
		 * Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract
		 */
		const { atomProps, otherProps } = extractAtomsFromProps(
			rest,
			sprinkles,
		);

		const Component = as || "div";

		return (
			<Component
				{...{
					className: clsx(
						userClassName,
						pillCSS({ colorOverlay, size }),
						sprinkles({
							...atomProps,
							paddingLeft: slotLeft ? "space_1" : "space_2",
							paddingRight: slotRight ? "space_1" : "space_2",
						}),
						a11yFocus,
					),
					id,
					ref,
					...otherProps,
				}}
			>
				<SlotWrapper
					color="inherit"
					gap="space_1"
					size={size}
					slotLeft={slotLeft}
					slotRight={slotRight}
				>
					{children}
				</SlotWrapper>
			</Component>
		);
	},
);
