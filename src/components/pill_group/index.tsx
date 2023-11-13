import clsx from "clsx";
import * as React from "react";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { pillGroupStyles } from "./styles.css";

/**
 * Pill group.
 * @private This is an internal component not meant for public consumption.
 */
function PrivatePillGroup(
	{ children, className, ...rest }: BoxProps,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<Box ref={ref} className={clsx(className, pillGroupStyles)} {...rest}>
			{children}
		</Box>
	);
}

export const PillGroup = React.forwardRef(PrivatePillGroup);
