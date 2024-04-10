import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { extractAtomsFromProps } from "@dessert-box/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import type { Css } from "../css/index.css";

import { css } from "../css/index.css";
import { iconCSS } from "./styles.css";

export type IconProps = FontAwesomeIconProps & {
    /**
     * An optional class name to apply to the icon.
     */
    className?: string;
    /**
     * The FontAwesome icon definition to render.
     */
    icon: IconProp;
} & Css;

export function Icon({
    className: userClassName,
    color = "currentColor",
    icon,
    ...rest
}: IconProps) {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, css);

    return (
        <FontAwesomeIcon
            className={clsx(
                iconCSS,
                userClassName,
                css({ ...atomProps, color }),
            )}
            icon={icon}
            {...otherProps}
        />
    );
}
