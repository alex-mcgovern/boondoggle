import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { type Sprinkles, sprinkles } from "../__DONE__sprinkles/index.css";
import { iconCSS } from "./styles.css";

export type IconProps = FontAwesomeIconProps & {
	className?: string;
	icon: IconProp;
} & Sprinkles;

export function Icon({
	className: userClassName,
	color = "currentColor",
	icon,
	...rest
}: IconProps) {
	const { atomProps, otherProps } = extractAtomsFromProps(rest, sprinkles);

	return (
		<FontAwesomeIcon
			className={clsx(
				iconCSS,
				userClassName,
				sprinkles({ ...atomProps, color, flexShrink: "0" }),
			)}
			icon={icon}
			{...otherProps}
		/>
	);
}
