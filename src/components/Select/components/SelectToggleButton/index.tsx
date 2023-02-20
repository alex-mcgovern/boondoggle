/* eslint-disable react/no-children-prop */
import type { LegacyRef } from "react";
import React, { forwardRef, useContext } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { invalidInput } from "../../../../styles/common/invalid_input_styles.css";
import type { ButtonProps } from "../../../Button";
import { Button } from "../../../Button";
import { DownshiftContext } from "../../context/DownshiftContext";

export interface SelectToggleButtonProps
  extends Omit<ButtonProps, "iconTrailing"> {
  invalid?: boolean;
}

export const SelectToggleButton = forwardRef(
  (
    {
      children,
      id,
      appearance = "select",
      justifyContent = "space-between",
      invalid,
      ...rest
    }: SelectToggleButtonProps,
    ref
  ) => {
    const { getToggleButtonProps, isOpen } = useContext(DownshiftContext);

    const dropdownToggleButtonClassNames = clsx({
      [invalidInput]: invalid,
    });

    return (
      <Button
        {...rest}
        className={dropdownToggleButtonClassNames}
        appearance={appearance}
        iconTrailing={faAngleDown}
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        iconTrailingProps={{
          rotation: isOpen ? 180 : undefined,
        }}
        justifyContent={justifyContent}
        {...getToggleButtonProps({
          ref: ref as LegacyRef<HTMLButtonElement>,
          id,
        })}
      >
        {children}
      </Button>
    );
  }
);
