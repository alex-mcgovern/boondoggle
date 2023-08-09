import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { getTheme } from "../../styles/color_palette.css";
import { Box } from "../Box";
import { FieldDescription } from "../FieldDescription";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldLabel } from "../FieldLabel";
import { RadioButtonCard } from "../RadioButtonCard";
import { getGroupLabelStyles } from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  LabelledElementCustomisation,
  WithStateInvalid,
} from "../../types";
import type {
  RadioButtonCardShape,
  RadioButtonInputProps,
} from "../RadioButtonCard";
import type { Ref } from "react";

/** ----------------------------------------------------------------------------- */

export type RadioButtonCardGroupProps = SprinklesArgs &
  LabelledElementCustomisation &
  WithStateInvalid & {
    defaultValue?: string | number;
    id: string;
    inputProps?: RadioButtonInputProps;
    invalid?: boolean;
    isLabelVisible?: boolean;
    items: Array<RadioButtonCardShape>;
    label: string;
    labelTooltip?: string;
    name: string;
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
          <FieldLabel
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
          <FieldErrorMessage message={errorMessage} />
        )}
        {description && !invalid && (
          <FieldDescription description={description} />
        )}
      </Box>
    );
  }
);
