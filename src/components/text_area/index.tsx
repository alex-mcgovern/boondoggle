import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { getOptionalLabelProps } from "../../common-types";
import { a11yError } from "../../styles/common/a11y.css";
import { utilCss } from "../../styles/utils/util_css.css";
import { FieldWrapper } from "../field_wrapper";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./styles.css";

import type { ComponentPropsWithoutRef, LegacyRef } from "react";
import type {
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
} from "../../common-types";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

export type TextAreaProps = Omit<
	ComponentPropsWithoutRef<"textarea">,
	"color" | "ref" | "id"
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
			size = "sm",
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
							utilCss(atomProps),
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
