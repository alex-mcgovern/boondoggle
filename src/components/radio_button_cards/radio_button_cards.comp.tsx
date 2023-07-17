import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { getTheme } from "../../styles/color_palette.css";
import { slugify } from "../../utils/slugify";
import { Box } from "../box";
import { InputDescription } from "../input_description";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { Pill } from "../pill";
import {
  radioButtonInputStyles,
  radioButtonLabelStyles,
  radioButtonListItemStyles,
} from "./radio_button_cards.styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  ConditionalLabelProps,
  LabelledElementCustomisation,
} from "../../types";
import type { HTMLProps, ReactNode, Ref } from "react";

/** ----------------------------------------------------------------------------- */

type RadioButtonInputProps = Omit<
  HTMLProps<HTMLInputElement>,
  "className" | "id" | "name" | "required" | "type" | "value"
>;

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardShape = {
  adornment: ReactNode;
  body: string;
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
  name,
  radioButtonInputProps,
  required,
  onChange,
  tag,
  title,
  checked,
  value,
}: RadioButtonCardProps) {
  return (
    <li className={radioButtonListItemStyles}>
      <Box
        as="label"
        className={radioButtonLabelStyles}
        htmlFor={`${name}-${value}`}
      >
        <input
          className={radioButtonInputStyles}
          defaultChecked={checked}
          id={`${name}-${value}`}
          name={name}
          required={required}
          type="radio"
          value={value}
          onChange={() => {
            onChange?.(value);
          }}
          {...radioButtonInputProps}
        />
        {adornment && <Box>{adornment}</Box>}
        <Box>
          <Box alignItems="center" display="flex" gap="spacing_1">
            <Box color="text_high_contrast">{title}</Box>
            {tag && <Pill size="sm">{tag}</Pill>}
          </Box>
          <Box color="text_low_contrast" fontStyle="body_sm">
            {body}
          </Box>
        </Box>
      </Box>
    </li>
  );
}

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardsProps = SprinklesArgs &
  LabelledElementCustomisation &
  ConditionalLabelProps & {
    defaultValue?: string;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    items: Array<RadioButtonCardShape>;
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
      value,
      description,
      errorMessage,
      id,
      invalid,
      items,
      label,
      labelProps,
      labelTooltip,
      name,
      onChange,
      radioButtonInputProps,
      required,
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
          checked:
            defaultValue === slugify(item.title) ||
            value === slugify(item.title),
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
            htmlFor={id}
            label={label}
            labelTooltip={labelTooltip}
            {...labelProps}
          />
        )}
        <Box as="ul" {...rest}>
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
