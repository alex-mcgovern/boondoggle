import { Box } from "../box/Box";
import { fieldsGridStyle } from "./styles.css";

import type { ReactNode } from "react";
import type { BoxProps } from "../box/Box";

export type FieldsGridProps = BoxProps & {
	children: ReactNode;
};

export function FieldsGrid({ children, ...rest }: FieldsGridProps) {
	return (
		<Box className={fieldsGridStyle} {...rest}>
			{children}
		</Box>
	);
}
