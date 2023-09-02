import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { FieldWrapper } from "../field_wrapper";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./styles.css";

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
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef, LegacyRef } from "react";

export type TextAreaProps = Omit<ComponentPropsWithoutRef<"textarea">, "color" | "ref"> &
    // WithOptionalIsClearable &
    // WithOptionalIsCopyable &
    SprinklesArgs &
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
            id,
            invalid,
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
        ref: LegacyRef<HTMLTextAreaElement> | undefined
    ) => {
        /**
         * Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract
         */
        const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

        return (
            <FieldWrapper
                colorOverlay={colorOverlay}
                description={description}
                errorMessage={errorMessage}
                hideLastpass={hideLastpass}
                id={id}
                invalid={invalid}
                label={label}
                labelProps={labelProps}
                labelTooltip={labelTooltip}
                wrapperProps={wrapperProps}
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
                            getSprinkles(atomProps),
                            {
                                [a11yError]: invalid,
                            }
                        )}
                        id={id}
                        name={name}
                        ref={ref}
                        {...otherProps}
                    />
                </SlotWrapper>
            </FieldWrapper>
        );
    }
);
