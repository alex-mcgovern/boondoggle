import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import type { Color } from "../types";

import "./styles.css";

/**
 * A wrapper around the FontAwesome icon component.
 */
export function Icon({
	className,
	color,
	icon,
	...rest
}: Omit<FontAwesomeIconProps, "color"> & {
	/**
	 * An optional class name to apply to the icon.
	 */
	className?: string;
	/**
	 * The color of the icon.
	 */
	color?: Color;

	/**
	 * The FontAwesome icon definition to render.
	 */
	icon: IconProp;
}) {
	return (
		<FontAwesomeIcon
			className={clsx("icon", className, color)}
			icon={icon}
			{...rest}
		/>
	);
}
