import clsx from "clsx";

import { topBarStyle } from "./styles.css";

/**
 * Top bar HTML element.
 */
export function TopBar({
    children,
    className,
    ...rest
}: React.HTMLProps<HTMLElement>) {
    return (
        <header
            className={clsx(className, topBarStyle)}
            {...rest}
        >
            {children}
        </header>
    );
}
