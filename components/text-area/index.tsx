import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";
import { getOptionalLabelProps } from "../../src/common-types";
import { css } from "../../src/styles/utils/util_css.css";
import { FieldWrapper } from "../field-wrapper";
import * as styles from "./styles.css";
import type { ComponentPropsWithoutRef, LegacyRef } from "react";
import type {
	WithTheme,
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
} from "../../src/common-types";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";
import { SlotWrapper } from "../_utility/slot_wrapper";
import { a11yError } from "../../style.css";

export type TextAreaProps = Omit<
	ComponentPropsWithoutRef<"textarea">,
	"color" | "ref" | "id"
> &
	// WithOptionalIsClearable &
	// WithOptionalIsCopyable &
	UtilCssArgs &
	WithTheme &
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
			theme,
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
		 * Separate `UtilCssArgs` from other spread props, so we don't break Vanilla Extract
		 */
		const { atomProps, otherProps } = extractAtomsFromProps(rest, css);

		return (
			<FieldWrapper
				theme={theme}
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
							styles.getTextAreaStyles({ size }),
							css(atomProps),
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
