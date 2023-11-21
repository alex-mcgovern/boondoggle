import clsx from "clsx";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { buttonGroupStyles } from "./styles.css";

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
