import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React from "react";

import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Icon } from "../Icon";
import { Box } from "../box_component/box.component";
import * as styles from "./index.css";

import type { BoxProps } from "../box_component/box.component";
import type { VariantTagStateEnum } from "./tag_state.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode } from "react";

export interface TagProps extends BoxProps {
  /** Variant prop controlling tag appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  state?: VariantTagStateEnum;
  /** FontAwesome icon shown on the left side of tag. */
  iconLeft?: IconProp;
  /** FontAwesome icon shown on the right side of tag. */
  iconRight?: IconProp;
  /** Used as the html ID. */
  id?: string;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
  /** The react node rendered in the tag. */
  children?: ReactNode;
  /** The string URI to link to. Supports relative and absolute URIs. */
  to?: string;
}

export function Tag({
  as,
  id,
  iconLeft,
  iconRight,
  state,
  children,
  ...rest
}: TagProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  const tagStyle = clsx([
    styles.getTagStyle({ state }),
    getSprinkles(atomProps),
    globalFocusStyles,
  ]);

  return (
    <Box as={as} className={tagStyle} id={id} {...otherProps}>
      {iconLeft && <Icon className={styles.iconLeft} icon={iconLeft} />}
      {children}
      {iconRight && <Icon className={styles.iconRight} icon={iconRight} />}
    </Box>
  );
}
