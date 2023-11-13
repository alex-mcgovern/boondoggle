import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { utilCss } from "../../styles/utils/util_css.css";
import { SlotWrapper } from "../slot_wrapper";
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
	WithColorOverlay,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../../common-types";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

type BasePillProps<TPolymorphicAs extends ElementType> = UtilCssArgs &
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
		const { atomProps, otherProps } = extractAtomsFromProps(rest, utilCss);

		const Component = as || "div";

		return (
			<Component
				{...{
					className: clsx(
						userClassName,
						styles.getPillStyle({ colorOverlay, size }),
						utilCss({
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
