import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, LegacyRef } from "react";
import { FieldWrapper } from "../field-wrapper";
import { a11yError } from "../index.css";
import { SlotWrapper } from "../slot-wrapper";
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
import { getTextAreaStyles } from "./styles.css";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";

export type TextAreaProps = Omit<
	ComponentPropsWithoutRef<"textarea">,
	"color" | "ref" | "id"
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
	WithWrapperProps;

export const TextArea = forwardRef(
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
			name,
			size = "md",
			slotLeft,
			slotRight,
			wrapperProps,
			...rest
		}: TextAreaProps,
		ref: LegacyRef<HTMLTextAreaElement> | undefined,
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
				<SlotWrapper
					alignItems="start"
					size={size}
					slotLeft={slotLeft}
					slotProps={{ paddingY: "space_2" }}
					slotRight={slotRight}
				>
					<textarea
						aria-invalid={invalid}
						aria-label={label}
						className={clsx(
							getTextAreaStyles({ size }),
							sprinkles(atomProps),
							{
								[a11yError]: invalid,
							},
						)}
						id={name}
						name={name}
						ref={ref}
						{...otherProps}
					/>
				</SlotWrapper>
			</FieldWrapper>
		);
	},
);
