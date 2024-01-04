import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, LegacyRef } from "react";
import { a11yError } from "../index.css";
import {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithName,
	WithOptionalIsVisibilityToggleable,
	WithOptionalPlaceholder,
	WithReadOnly,
	WithSize,
	WithSlots,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";

import { SlotWrapper } from "../_DEPRECATED_slot-wrapper";

import { getTextAreaStyles } from "./styles.css";
import { FieldWrapper } from "../field-wrapper";
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
	WithOptionalPlaceholder &
	WithReadOnly &
	WithSize &
	WithSlots &
	WithStateInvalid &
	WithWrapperProps & {
		label?: string;
	};

export const TextArea = forwardRef(
	(
		{
			colorOverlay,
			description,
			errorMessage,
			hideLastpass,
			invalid,
			label,
			name,
			size = "sm",
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
				label={label}
				name={name}
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
