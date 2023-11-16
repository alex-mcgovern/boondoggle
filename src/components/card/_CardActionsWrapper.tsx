import { Box } from "../box/_components/Box";

import type { ReactNode } from "react";

/**
 * Wraps actions for a card.
 */
export function CardActionsWrapper({
	actions,
}: {
	/**
	 * Action shown on the right-hand side of a card.
	 */
	actions?: ReactNode | [ReactNode?, ReactNode?];
}) {
	if (!actions) {
		return null;
	}

	return (
		<Box alignItems="center" display="flex" gap="space_2" marginLeft="auto">
			{actions}
		</Box>
	);
}
