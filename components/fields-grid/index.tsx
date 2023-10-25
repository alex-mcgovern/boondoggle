import { Box } from "../box";
import { BoxProps } from "../box/Box";
import { fieldsGridStyle } from "./styles.css";
import type { ReactNode } from "react";

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
