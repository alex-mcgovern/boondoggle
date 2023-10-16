import { extractAtomsFromProps } from "@dessert-box/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import { utilCss } from "../../styles/utils/util_css";
import * as styles from "./styles.css";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import type { UtilCssArgs } from "../../styles/utils/util_css";

export type IconProps = FontAwesomeIconProps & {
	className?: string;

	icon: IconProp;
} & UtilCssArgs;

export function Icon({
	className: userClassName,
	color = "currentColor",
	icon,
	...rest
}: IconProps) {
	const { atomProps, otherProps } = extractAtomsFromProps(rest, utilCss);

	return (
		<FontAwesomeIcon
			className={clsx(
				styles.icon,
				userClassName,
				utilCss({ ...atomProps, color, flexShrink: "0" }),
			)}
			icon={icon}
			{...otherProps}
		/>
	);
}
