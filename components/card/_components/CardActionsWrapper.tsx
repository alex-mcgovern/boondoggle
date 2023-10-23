import type { ReactNode } from "react";
import { cardActionsWrapper } from "./CardActionsWrapper.css";
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

	return <div className={cardActionsWrapper}>{actions}</div>;
}
