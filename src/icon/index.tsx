import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { extractAtomsFromProps } from "@dessert-box/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import { type Css, css } from "../css/index.css";
import { iconCSS } from "./styles.css";

export type IconProps = FontAwesomeIconProps & {
    className?: string;
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
                css({ ...atomProps, color, flexShrink: "0" }),
            )}
            icon={icon}
            {...otherProps}
        />
    );
}
