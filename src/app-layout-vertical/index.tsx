import type { HTMLProps } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * The vertical layout is a layout that has a top nav bar and a scrollable main content area.
 */
export function AppVerticalRoot(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(props.className, "app-layout-vertical")}
        />
    );
}

/**
 * The top nav bar of the vertical layout.
 */
export function AppVerticalNav({ children, ...props }: HTMLProps<HTMLElement>) {
    return (
        <nav
            {...props}
            className={clsx(props.className, "app-layout-vertical-nav")}
        >
            <div className="app-layout-vertical-nav-inner">{children}</div>
        </nav>
    );
}

/**
 * The main content area of the vertical layout.
 */
export function AppVerticalMain({
    children,
    ...props
}: HTMLProps<HTMLElement>) {
    return (
        <main
            {...props}
            className={clsx(props.className, "app-layout-vertical-main")}
        >
            <div className="app-layout-vertical-main-inner">{children}</div>
        </main>
    );
}
