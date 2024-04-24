import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import type { Css } from "../css/index.css";

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

/**
 * A wrapper around the FontAwesome icon component.
 */
export function Icon({ className, icon, ...rest }: IconProps) {
    return (
        <FontAwesomeIcon
            className={clsx("icon", className)}
            icon={icon}
            {...rest}
        />
    );
}
