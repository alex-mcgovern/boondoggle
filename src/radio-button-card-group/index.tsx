import type { Ref } from "react";

import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import type { Css } from "../css/index.css";
import type {
    RadioButtonCardShape,
    RadioButtonInputProps,
} from "../radio-button-card";
import type {
    WithDescription,
    WithName,
    WithStateInvalid,
    WithWrapperProps,
} from "../types";

import { Box } from "../box";
import { FieldDescription } from "../field-description";
import { FieldError } from "../field-error";
import { variantColorOverlay } from "../index.css";
import { Label } from "../label";
import { RadioButtonCard } from "../radio-button-card";

export type RadioButtonCardGroupProps = Css &
    WithWrapperProps &
    WithStateInvalid &
    WithName &
    WithDescription & {
        defaultValue?: number | string;

        id: string;

        inputProps?: RadioButtonInputProps;

        invalid?: boolean;

        isLabelVisible?: boolean;

        items: Array<RadioButtonCardShape>;

        /**
         * Label config for the field.
         */
        label?: string;

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
            items,
            label,
            name,
            onChange,
            required,
            value,
            wrapperProps,
            ...rest
        }: RadioButtonCardGroupProps,
        ref: Ref<HTMLDivElement>,
    ) => {
        const controlledItems: Array<RadioButtonCardShape> = useMemo(() => {
            if (!Array.isArray(items) || items.length < 1) {
                return [];
            }
            return items.map((item) => {
                return {
                    ...item,
                    checked:
                        defaultValue === item.value || value === item.value,
                };
            });
        }, [defaultValue, items, value]);

        if (!Array.isArray(controlledItems) || controlledItems.length < 1) {
            return null;
        }

        return (
            <Box
                className={clsx({
                    [variantColorOverlay.red]: invalid,
                })}
                {...wrapperProps}
                ref={ref}
            >
                <Label>{label}</Label>

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
                {invalid && errorMessage && (
                    <FieldError>{errorMessage}</FieldError>
                )}
                {description && !invalid && (
                    <FieldDescription>{description}</FieldDescription>
                )}
            </Box>
        );
    },
);
