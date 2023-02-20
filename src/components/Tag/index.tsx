import type { ReactNode } from "react";
import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import { focusedStateStyle } from "../../styles/common/focus_ring_styles.css";
import { getSprinkles } from "../../styles/getSprinkles.css";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { Icon } from "../Icon";
import * as styles from "./index.css";
import type { VariantTagStateEnum } from "./tag_state.css";

export interface TagProps extends BoxProps {
  /** Variant prop controlling tag appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  state?: VariantTagStateEnum;
  /** FontAwesome icon shown on the left side of tag. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of tag. */
  iconTrailing?: IconProp;
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
  iconLeading,
  iconTrailing,
  state,
  children,
  ...rest
}: TagProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  const tagStyle = clsx([
    styles.getTagStyle({ state }),
    getSprinkles(atomProps),
    focusedStateStyle,
  ]);

  return (
    <Box as={as} className={tagStyle} id={id} {...otherProps}>
      {iconLeading && (
        <Icon className={styles.iconLeading} icon={iconLeading} />
      )}
      {children}
      {iconTrailing && (
        <Icon className={styles.iconTrailing} icon={iconTrailing} />
      )}
    </Box>
  );
}
