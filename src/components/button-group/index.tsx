import clsx from "clsx";

import { Box } from "../box/_components/Box";
import { buttonGroupStyles } from "./styles.css";

import type { BoxProps } from "../box/_components/Box";

/**
 * Button group.
 */
export function ButtonGroup({ children, className, ...rest }: BoxProps) {
	return (
		<Box className={clsx(className, buttonGroupStyles)} {...rest}>
			{children}
		</Box>
	);
}
