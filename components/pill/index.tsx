import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import { css } from "../../src/styles/utils/util_css.css";
import { SlotWrapper } from "../_utility/slot_wrapper";
import * as styles from "./styles.css";

import type {
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement,
	ReactNode,
} from "react";
import type {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
	WithTheme,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../../src/common-types";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";

type BasePillProps<TPolymorphicAs extends ElementType> = UtilCssArgs &
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithTheme &
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
			theme,
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
		const { atomProps, otherProps } = extractAtomsFromProps(rest, css);

		const Component = as || "div";

		return (
			<Component
				{...{
					className: clsx(
						userClassName,
						styles.getPillStyle({ theme, size }),
						css({
							...atomProps,
							paddingLeft: slotLeft ? "space_1" : "space_2",
							paddingRight: slotRight ? "space_1" : "space_2",
						}),
						focus,
					),
					id,
					ref,
					...otherProps,
				}}
			>
				<SlotWrapper
					theme="inherit"
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
