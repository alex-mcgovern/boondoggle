import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Icon } from "../icon";
import * as styles from "./tag.styles.css";

import type { Intent } from "../../styles/theme.css";
import type { BoxProps } from "../box";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode } from "react";

export interface TagProps extends BoxProps {
    /** Variant prop controlling tag appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
    state?: styles.VariantTagStateEnum;
    /** FontAwesome icon shown on the left side of tag. */
    slotLeft?: IconProp;
    /** FontAwesome icon shown on the right side of tag. */
    slotRight?: IconProp;
    /** Used as the html ID. */
    id?: string;
    /** USed to communicate semantic meaning */
    intent?: Intent;
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
    intent,
    slotLeft,
    slotRight,
    state,
    children,
    ...rest
}: TagProps) {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const tagStyle = clsx([
        styles.getTagStyle({ state, intent }),
        getSprinkles(atomProps),
        a11yFocus,
    ]);

    return (
        <Box as={as} className={tagStyle} id={id} {...otherProps}>
            {slotLeft && <Icon className={styles.slotLeft} icon={slotLeft} />}
            {children}
            {slotRight && (
                <Icon className={styles.slotRight} icon={slotRight} />
            )}
        </Box>
    );
}
