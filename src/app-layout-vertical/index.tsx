import type { HTMLProps } from "react";

import clsx from "clsx";

import "./styles.css";

function AppLayoutVerticalRoot(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(props.className, "app-layout-vertical")}
        />
    );
}

function AppLayoutVerticalNav({ children, ...props }: HTMLProps<HTMLElement>) {
    return (
        <nav
            {...props}
            className={clsx(props.className, "app-layout-vertical-nav")}
        >
            <div className="app-layout-vertical-nav-inner">{children}</div>
        </nav>
    );
}

function AppLayoutVerticalMain({ children, ...props }: HTMLProps<HTMLElement>) {
    return (
        <main
            {...props}
            className={clsx(props.className, "app-layout-vertical-main")}
        >
            <div className="app-layout-vertical-main-inner">{children}</div>
        </main>
    );
}

/**
 * Vertical layout for an app, composed of a nav and main content area.
 */
export const AppLayoutVertical = {
    Main: AppLayoutVerticalMain,
    Nav: AppLayoutVerticalNav,
    Root: AppLayoutVerticalRoot,
};
