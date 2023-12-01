import { Children } from "react";
import type { ReactNode } from "react";
import {
	actionsCSS,
	columnFiltersCSS,
	globalFilterCSS,
	tableActionsCSS,
	tableActionsContainerCSS,
} from "./styles.css";
import { HeaderSecondary } from "../../../../header-secondary";

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
		<HeaderSecondary className={tableActionsContainerCSS}>
			<div className={tableActionsCSS({ withExtraActions: !!actions })}>
				{actions ? (
					<div className={actionsCSS}>
						{Children.map(actions, (action) => {
							return action;
						})}
					</div>
				) : null}
				<div className={columnFiltersCSS}>{columnFilters}</div>
				<div className={globalFilterCSS}>{globalFilter}</div>
			</div>
		</HeaderSecondary>
	);
}
