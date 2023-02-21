import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import type { GetSprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import * as styles from "./icon.css";

export interface IconProps
  extends GetSprinklesArgs,
    Omit<
      FontAwesomeIconProps,
      | "border"
      | "color"
      | "display"
      | "fontSize"
      | "fontStyle"
      | "fontWeight"
      | "height"
      | "overflow"
      | "textDecoration"
      | "width"
    > {
  icon: IconProp;
}

export function Icon({ icon, className, ...rest }: IconProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <Box {...atomProps}>
      <FontAwesomeIcon
        icon={icon}
        className={clsx(styles.icon, className)}
        {...otherProps}
      />
    </Box>
  );
}
