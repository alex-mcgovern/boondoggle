import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { getTheme } from "../../styles/color_palette.css";
import { Box } from "../box";
import { InputDescription } from "../input_description";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import {
  getGroupLabelStyles,
  radioButtonInputStyles,
  radioButtonLabelStyles,
} from "./radio_button_cards.styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { LabelledElementCustomisation } from "../../types";
import type { HTMLProps, ReactNode, Ref } from "react";

/** ----------------------------------------------------------------------------- */

type RadioButtonInputProps = Omit<
  HTMLProps<HTMLInputElement>,
  "className" | "id" | "name" | "required" | "type" | "value"
>;

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardShape = {
  adornment: ReactNode;
  body?: string;
  checked?: boolean;
  tag?: string;
  title: string;
  value: string;
};

/** ----------------------------------------------------------------------------- */

type RadioButtonCardProps = RadioButtonCardShape & {
  name: string;
  onChange?: (value: string) => void;
  radioButtonInputProps?: RadioButtonInputProps;
  required?: boolean;
};

export function RadioButtonCard({
  adornment,
  body,
  checked,
  name,
  onChange,
  radioButtonInputProps,
  required,
  title,
  value,
}: RadioButtonCardProps) {
  return (
    <Box
      as="label"
      className={radioButtonLabelStyles}
      htmlFor={`${name}-${value}`}
      position="relative"
    >
      <input
        className={radioButtonInputStyles}
        defaultChecked={checked}
        id={`${name}-${value}`}
        name={name}
        onChange={() => {
          onChange?.(value);
        }}
        required={required}
        type="radio"
        value={value}
        {...radioButtonInputProps}
      />
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        {adornment && <Box marginBottom="spacing_2">{adornment}</Box>}
        <Box alignItems="center" display="flex" gap="spacing_1">
          <Box color="text_high_contrast">{title}</Box>
        </Box>
        <Box color="text_low_contrast" fontStyle="body_xs">
          {body}
        </Box>
      </Box>
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardsProps = SprinklesArgs &
  LabelledElementCustomisation & {
    defaultValue?: string | number;
    description?: string;
    errorMessage?: string;
    id: string;
    invalid?: boolean;
    isLabelVisible?: boolean;
    items: Array<RadioButtonCardShape>;
    label: string;
    labelTooltip?: string;
    name: string;
    onChange?: (value: string) => void;
    radioButtonInputProps?: RadioButtonInputProps;
    required?: boolean;
    value?: string;
  };

export const RadioButtonCards = forwardRef(
  (
    {
      defaultValue,
      description,
      errorMessage,
      id,
      invalid,
      isLabelVisible,
      items,
      label,
      labelProps,
      labelTooltip,
      name,
      onChange,
      radioButtonInputProps,
      required,
      value,
      wrapperProps,
      ...rest
    }: RadioButtonCardsProps,
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

    /** --------------------------------------------- */

    if (!Array.isArray(controlledItems) || controlledItems.length < 1) {
      return null;
    }

    /** --------------------------------------------- */

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        {...wrapperProps}
        ref={ref}
      >
        {label && id && (
          <Label
            className={getGroupLabelStyles({ isLabelVisible })}
            htmlFor={id}
            id={`label-${id}`}
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
          gap="spacing_1"
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
                key={item.title}
                name={name}
                onChange={onChange}
                radioButtonInputProps={radioButtonInputProps}
                required={required}
                title={item.title}
                value={item.value}
              />
            );
          })}
        </Box>
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
        {description && !invalid && (
          <InputDescription description={description} />
        )}
      </Box>
    );
  }
);

/** ----------------------------------------------------------------------------- */
