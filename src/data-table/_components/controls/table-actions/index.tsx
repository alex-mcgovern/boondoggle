import type { ReactNode } from "react";

import { Children } from "react";

import {
    actionsCSS,
    columnFiltersCSS,
    globalFilterCSS,
    tableActionsCSS,
    tableActionsContainerCSS,
} from "./styles.css";

export function TableActions({
    actions,
    columnFilters,
    globalFilter,
}: {
    actions?: ReactNode;
    columnFilters: ReactNode;
    globalFilter?: ReactNode;
}) {
    if (!globalFilter && !columnFilters && !actions) {
        return null;
    }

    return (
        <div className={tableActionsContainerCSS}>
            <div className={tableActionsCSS}>
                <div className={globalFilterCSS}>{globalFilter}</div>
                <div className={columnFiltersCSS}>{columnFilters}</div>
                {actions ? (
                    <div className={actionsCSS}>
                        {Children.map(actions, (action) => {
                            return action;
                        })}
                    </div>
                ) : null}
            </div>
        </div>
    );
}
