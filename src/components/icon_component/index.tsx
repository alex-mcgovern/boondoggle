import { extractAtomsFromProps } from "@dessert-box/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box_component/box.component";
import * as styles from "./icon.css";

import type {
  SprinklesArgs,
  SprinklesColor,
  SprinklesMargin,
  SprinklesPadding,
  SprinklesSize,
} from "../../styles/utils/get_sprinkles.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IconProps
  extends SprinklesMargin,
    SprinklesPadding,
    SprinklesColor,
    SprinklesSize,
    Pick<SprinklesArgs, "display">,
    Pick<FontAwesomeIconProps, "size"> {
  icon: IconProp;
  className?: string;
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
