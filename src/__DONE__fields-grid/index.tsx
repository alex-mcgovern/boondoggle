import { Box } from "../__DONE__box";
import { fieldsGridStyle } from "./styles.css";

import type { ReactNode } from "react";
import type { BoxProps } from "../__DONE__box";

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
