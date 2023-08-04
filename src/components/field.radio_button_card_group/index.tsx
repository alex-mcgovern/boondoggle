import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { getTheme } from "../../styles/color_palette.css";
import { Box } from "../core.box";
import { InputDescription } from "../field.description";
import { InputErrorMessage } from "../field.error_message";
import { Label } from "../field.label";
import { RadioButtonCard } from "../field.radio_button_card";
import { getGroupLabelStyles } from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { LabelledElementCustomisation } from "../../types";
import type {
  RadioButtonCardShape,
  RadioButtonInputProps,
} from "../field.radio_button_card";
import type { Ref } from "react";

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

export const RadioButtonCardGroup = forwardRef(
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
