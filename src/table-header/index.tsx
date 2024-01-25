import type { ReactNode } from "react";

import {
    actionsContainerCSS,
    filtersContainerCSS,
    searchContainerCSS,
    tableHeaderContainerCSS,
    tableHeaderGridCSS,
} from "./styles.css";

export const TableSearchContainer = ({ children }: { children: ReactNode }) => {
    return <div className={searchContainerCSS}>{children}</div>;
};

export const TableFiltersContainer = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <div className={filtersContainerCSS}>{children}</div>;
};

export const TableActionsContainer = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <div className={actionsContainerCSS}>{children}</div>;
};

export function TableHeader({ children }: { children: ReactNode }) {
    return (
        <div className={tableHeaderContainerCSS}>
            <div className={tableHeaderGridCSS}>{children}</div>
        </div>
    );
}
