import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { FieldWrapper } from "../field-wrapper";
import { type UtilCssArgs, a11yError, utilCss } from "../index.css";
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
import * as styles from "./styles.css";

export type NativeSelectProps = Omit<
	ComponentPropsWithoutRef<"select">,
	"color" | "ref" | "id" | "size"
> &
	// WithOptionalIsClearable &
	// WithOptionalIsCopyable &
	UtilCssArgs &
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
		 * Separate `UtilCssArgs` from other spread props, so we don't break Vanilla Extract
		 */
		const { atomProps, otherProps } = extractAtomsFromProps(rest, utilCss);

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
					className={clsx(
						styles.select({ size }),
						utilCss(atomProps),
						{
							[a11yError]: invalid,
						},
					)}
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
