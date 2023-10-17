import clsx from "clsx";

import { Box } from "../box";
import { loadingStyles } from "./styles.css";

import type { BoxProps } from "../box";

export function Skeleton({ className, width = "100%", ...rest }: BoxProps) {
	return (
		<Box
			width={width}
			className={clsx(className, loadingStyles)}
			{...rest}
		/>
	);
}
