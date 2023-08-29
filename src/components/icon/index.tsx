import { extractAtomsFromProps } from "@dessert-box/core";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import {
  type SprinklesArgs,
  getSprinkles,
} from "../../styles/utils/get_sprinkles.css";
import * as styles from "./styles.css";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type IconProps = FontAwesomeIconProps & {
  className?: string;
  icon: IconProp;
} & SprinklesArgs;

export function Icon({
  className: userClassName,
  color = "currentColor",
  icon,
  ...rest
}: IconProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <FontAwesomeIcon
      className={clsx(
        styles.icon,
        userClassName,
        getSprinkles({ ...atomProps, color, flexShrink: "0" })
      )}
      icon={icon}
      {...otherProps}
    />
  );
}
