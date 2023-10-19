import clsx from "clsx";
import { Box } from "../box";
import { loadingStyles } from "./Skeleton.styles.css";
import type { BoxProps } from "../box";

export function Skeleton({
	className,
	width = "100%",
	height = "space_6",
	...rest
}: BoxProps) {
	return (
		<Box
			width={width}
			height={height}
			className={clsx(className, loadingStyles)}
			{...rest}
		/>
	);
}
