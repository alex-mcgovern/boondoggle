import { Children } from "react";
import type { ReactNode } from "react";
import {
	actionsCSS,
	columnFiltersCSS,
	globalFilterCSS,
	tableActionsCSS,
} from "./styles.css";

export function TableActions({
	globalFilter,
	columnFilters,
	actions,
}: {
	globalFilter?: ReactNode;
	columnFilters: ReactNode;
	actions?: ReactNode;
}) {
	if (!globalFilter && !columnFilters && !actions) {
		return null;
	}

	return (
		<div className={tableActionsCSS}>
			<div className={globalFilterCSS}>{globalFilter}</div>
			<div className={columnFiltersCSS}>{columnFilters}</div>
			<div className={actionsCSS}>
				{Children.map(actions, (action) => {
					return action;
				})}
			</div>
		</div>
	);
}
