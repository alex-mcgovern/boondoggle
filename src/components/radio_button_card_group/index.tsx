import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { getTheme } from "../../styles/color_palette.css";
import { Box } from "../box";
import { FieldDescription } from "../field_description";
import { FieldErrorMessage } from "../field_error_message";
import { FieldLabel } from "../field_label";
import { RadioButtonCard } from "../radio_button_card";

import type {
    WithDescription,
    WithName,
    WithOptionalLabel,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { RadioButtonCardShape, RadioButtonInputProps } from "../radio_button_card";
import type { Ref } from "react";

export type RadioButtonCardGroupProps = SprinklesArgs &
    WithWrapperProps &
    WithStateInvalid &
    WithName &
    WithDescription &
    WithOptionalLabel & {
        defaultValue?: string | number;

        id: string;

        inputProps?: RadioButtonInputProps;

        invalid?: boolean;

        isLabelVisible?: boolean;

        items: Array<RadioButtonCardShape>;

        label: string;

        labelTooltip?: string;

        onChange?: (value: string) => void;

        required?: boolean;

        value?: string;
    };

export const RadioButtonCardGroup = forwardRef(
    (
        {
            defaultValue,
            description,
            errorMessage,
            id,
            inputProps,
            invalid,
            isLabelVisible,
            items,
            label,
            labelProps,
            labelTooltip,
            name,
            onChange,
            required,
            value,
            wrapperProps,
            ...rest
        }: RadioButtonCardGroupProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const controlledItems: Array<RadioButtonCardShape> = useMemo(() => {
            if (!Array.isArray(items) || items.length < 1) {
                return [];
            }
            return items.map((item) => {
                return {
                    ...item,
                    checked: defaultValue === item.value || value === item.value,
                };
            });
        }, [defaultValue, items, value]);

        if (!Array.isArray(controlledItems) || controlledItems.length < 1) {
            return null;
        }

        return (
            <Box
                className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
                {...wrapperProps}
                ref={ref}
            >
                {label && id && (
                    <FieldLabel
                        htmlFor={id}
                        id={`label-${id}`}
                        isLabelVisible={isLabelVisible}
                        label={label}
                        labelTooltip={labelTooltip}
                        {...labelProps}
                    />
                )}
                <Box
                    aria-labelledby={`label-${id}`}
                    as="fieldset"
                    display="flex"
                    flexWrap="wrap"
                    gap="space_2"
                    id={id}
                    name={name}
                    {...rest}
                >
                    {controlledItems.map((item) => {
                        return (
                            <RadioButtonCard
                                adornment={item.adornment}
                                body={item.body}
                                checked={item.checked}
                                inputProps={inputProps}
                                key={item.title}
                                name={name}
                                onChange={onChange}
                                required={required}
                                title={item.title}
                                value={item.value}
                            />
                        );
                    })}
                </Box>
                {invalid && errorMessage && <FieldErrorMessage message={errorMessage} />}
                {description && !invalid && <FieldDescription description={description} />}
            </Box>
        );
    }
);
