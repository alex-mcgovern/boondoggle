import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import React, { forwardRef, useContext } from "react";

import { globalErrorStyles } from "../../../../styles/common/globalErrorStyles.css";
import { Button } from "../../../button/button.component";
import { Icon } from "../../../icon";
import { DownshiftContext } from "../../context/DownshiftContext";

import type { ButtonProps } from "../../../button/button.component";
import type { LegacyRef } from "react";

export interface SelectToggleButtonProps
  extends Omit<ButtonProps, "slotRight"> {
  invalid?: boolean;
}

const DEFAULT_SLOT_RIGHT = <Icon icon={faAngleDown} />;

export const SelectToggleButton = forwardRef(
  (
    {
      children,
      id,
      slotRight = DEFAULT_SLOT_RIGHT,
      appearance = "select",
      justifyContent = "space-between",
      invalid,
      ...rest
    }: SelectToggleButtonProps,
    ref
  ) => {
    const { getToggleButtonProps, isOpen } = useContext(DownshiftContext);

    const dropdownToggleButtonClassNames = clsx({
      [globalErrorStyles]: invalid,
    });

    return (
      <Button
        {...rest}
        className={dropdownToggleButtonClassNames}
        appearance={appearance}
        slotRight={slotRight}
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        iconRightProps={{
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
