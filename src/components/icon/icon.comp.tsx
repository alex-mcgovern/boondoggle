import { extractAtomsFromProps } from "@dessert-box/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import * as styles from "./icon.styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type IconProps = SprinklesArgs &
  Pick<FontAwesomeIconProps, "size" | "spin"> & {
    className?: string;
    icon: IconProp;
  };

export function Icon({ icon, className: userClassName, ...rest }: IconProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <FontAwesomeIcon
      className={clsx(
        styles.icon,
        userClassName,
        getSprinkles({ ...atomProps, flexShrink: "0" })
      )}
      icon={icon}
      {...otherProps}
    />
  );
}
