import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { utilCss, type UtilCssArgs } from "../../index.css";
import * as styles from "./styles.css";

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
