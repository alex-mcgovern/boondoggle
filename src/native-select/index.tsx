import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { a11yError } from "../index.css";
import { FieldWrapper } from "../field-wrapper";
import {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithName,
	WithOptionalIsVisibilityToggleable,
	WithOptionalLabel,
	WithOptionalPlaceholder,
	WithReadOnly,
	WithSize,
	WithSlots,
	WithStateInvalid,
	WithWrapperProps,
	getOptionalLabelProps,
} from "../types";
import { selectCSS } from "./styles.css";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";

export type NativeSelectProps = Omit<
	ComponentPropsWithoutRef<"select">,
	"color" | "ref" | "id" | "size"
> &
	// WithOptionalIsClearable &
	// WithOptionalIsCopyable &
	Sprinkles &
	WithColorOverlay &
	WithDescription &
	WithHideLastpass &
	WithOptionalIsVisibilityToggleable &
	WithName &
	WithOptionalLabel &
	WithOptionalPlaceholder &
	WithReadOnly &
	WithSize &
	WithSlots &
	WithStateInvalid &
	WithWrapperProps & { children: React.ReactNode };

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
	(
		{
			colorOverlay,
			description,
			errorMessage,
			hideLastpass,
			invalid,
			isLabelVisible,
			label,
			labelProps,
			labelTooltip,
			children,
			name,
			size = "md",
			wrapperProps,
			...rest
		},
		ref,
	) => {
		/**
		 * Separate `Sprinkles` from other spread props, so we don't break Vanilla Extract
		 */
		const { atomProps, otherProps } = extractAtomsFromProps(
			rest,
			sprinkles,
		);

		return (
			<FieldWrapper
				colorOverlay={colorOverlay}
				description={description}
				errorMessage={errorMessage}
				hideLastpass={hideLastpass}
				invalid={invalid}
				wrapperProps={wrapperProps}
				{...getOptionalLabelProps({
					isLabelVisible,
					label,
					labelProps,
					labelTooltip,
					name,
				})}
			>
				<select
					aria-invalid={invalid}
					aria-label={label}
					className={clsx(selectCSS({ size }), sprinkles(atomProps), {
						[a11yError]: invalid,
					})}
					id={name}
					name={name}
					ref={ref}
					{...otherProps}
				>
					{children}
				</select>
			</FieldWrapper>
		);
	},
);
