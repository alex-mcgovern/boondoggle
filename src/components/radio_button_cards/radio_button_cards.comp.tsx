import clsx from "clsx";

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
import type { HTMLProps, ReactNode } from "react";

/** ----------------------------------------------------------------------------- */

type RadioButtonInputProps = Omit<
  HTMLProps<HTMLInputElement>,
  "className" | "id" | "name" | "required" | "type" | "value"
>;

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardShape = {
  adornment: ReactNode;
  body: string;
  tag?: string;
  title: string;
};

/** ----------------------------------------------------------------------------- */

type RadioButtonCardProps = RadioButtonCardShape & {
  name: string;
  radioButtonInputProps?: RadioButtonInputProps;
  required?: boolean;
};

export function RadioButtonCard({
  title,
  adornment,
  body,
  name,
  required,
  tag,
  radioButtonInputProps,
}: RadioButtonCardProps) {
  const id = slugify(title);

  return (
    <li className={radioButtonListItemStyles}>
      <Box as="label" className={radioButtonLabelStyles} htmlFor={id}>
        <input
          className={radioButtonInputStyles}
          id={id}
          name={name}
          required={required}
          type="radio"
          value={id}
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

type RadioButtonCardsProps = SprinklesArgs &
  LabelledElementCustomisation &
  ConditionalLabelProps & {
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    items: Array<RadioButtonCardShape>;
    labelTooltip?: string;
    name: string;
    radioButtonInputProps?: RadioButtonInputProps;
    required?: boolean;
  };

export function RadioButtonCards({
  name,
  required,
  items,
  label,
  id,
  labelProps,
  labelTooltip,
  radioButtonInputProps,
  invalid,
  errorMessage,
  description,
  wrapperProps,
  ...rest
}: RadioButtonCardsProps) {
  if (!Array.isArray(items) || items.length < 1) {
    return null;
  }

  return (
    <Box
      className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
      {...wrapperProps}
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
        {items.map((item) => {
          return (
            <RadioButtonCard
              adornment={item.adornment}
              body={item.body}
              key={item.title}
              name={name}
              radioButtonInputProps={radioButtonInputProps}
              required={required}
              title={item.title}
            />
          );
        })}
      </Box>
      {invalid && errorMessage && <InputErrorMessage message={errorMessage} />}
      {description && !invalid && (
        <InputDescription description={description} />
      )}
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */
