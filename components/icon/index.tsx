import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { utilCss } from "../../src/styles/utils/util_css.css";
import * as styles from "./styles.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";

export type IconProps = FontAwesomeIconProps & {
	className?: string;
	icon: IconProp;
	color?: UtilCssArgs["color"];
	height?: UtilCssArgs["height"];
	width?: UtilCssArgs["width"];
};

export function Icon({
	className: userClassName,
	color = "currentColor",
	icon,
	height,
	width,
	...rest
}: IconProps) {
	return (
		<FontAwesomeIcon
			className={clsx(
				styles.icon,
				userClassName,
				utilCss({ color, flexShrink: "0", height, width }),
			)}
			icon={icon}
			{...rest}
		/>
	);
}
