import clsx from "clsx";
import { Box } from "../__DONE__box";
import type { BoxProps } from "../__DONE__box";
import { loadingStyles } from "./styles.css";

export function Skeleton({
	className,
	width = "100%",
	height = "space_6",
	borderRadius = "sm",
	...rest
}: BoxProps) {
	return (
		<Box
			width={width}
			height={height}
			borderRadius={borderRadius}
			className={clsx(className, loadingStyles)}
			{...rest}
		/>
	);
}
