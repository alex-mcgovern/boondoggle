import { Children } from "react";

import { Box } from "../../../box";

import type { ReactNode } from "react";
import type { UtilCssArgs } from "../../../../styles/utils/util_css.css";

type DataTableActionsWrapperProps = {
	/**
	 * Action shown on the left-hand side
	 */
	leftAction?: ReactNode;

	/**
	 * Action shown on the right-hand side
	 */
	rightActions?: ReactNode | [ReactNode?, ReactNode?];
} & UtilCssArgs;

/**
 * Wraps actions for a data table.
 */
export function DataTableActionsWrapper({
	leftAction,
	rightActions,
	...rest
}: DataTableActionsWrapperProps) {
	if (!leftAction && !rightActions) {
		return null;
	}

	return (
		<Box
			alignItems="center"
			borderTop="border_default"
			borderBottom="border_default"
			display="flex"
			gap="space_2"
			marginTop="space_4"
			paddingY="space_4"
			{...rest}
		>
			{leftAction && <Box>{leftAction}</Box>}
			{rightActions && (
				<Box
					alignItems="center"
					display="flex"
					gap="space_2"
					marginLeft="auto"
				>
					{Children.map(rightActions, (action) => {
						return action;
					})}
				</Box>
			)}
		</Box>
	);
}
