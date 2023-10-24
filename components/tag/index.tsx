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
import { focus } from "../../style.css";

type BaseTagProps<TPolymorphicAs extends ElementType> = UtilCssArgs &
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithTheme &
			WithSize &
			WithSlots &
			WithStateDisabled & {
				/**
				 * The react node rendered in the tag.
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

type TagComponent = <TPolymorphicAs extends ElementType = "div">(
	props: BaseTagProps<TPolymorphicAs>,
) => ReactElement | null;

export type TagProps = ComponentPropsWithoutRef<typeof Tag>;

export const Tag: TagComponent = forwardRef(
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
		}: BaseTagProps<TPolymorphicAs>,
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
						styles.getTagStyle({ theme, size }),
						css(atomProps),
						focus,
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
