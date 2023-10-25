import clsx from "clsx";
import { Box } from "../box/Box"; import { buttonGroupStyles } from "./ButtonGroup.css";
import type { BoxProps } from "../box/Box";
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
