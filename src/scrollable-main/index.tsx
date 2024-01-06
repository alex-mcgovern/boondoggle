import type { HTMLProps, ReactNode } from "react";

import clsx from "clsx";

import type { WithSize } from "../types";

import { scrollableMainCSS, scrollableMainInnerCSS } from "./styles.css";
import { nonScrollableWrapperCSS } from "./styles.css";

export const NonScrollableWrapper = ({ children }: { children: ReactNode }) => {
    return <div className={nonScrollableWrapperCSS}>{children}</div>;
};

export function ScrollableMain({
    children,
    className,
    headers,
    size = "lg",
    ...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
    WithSize & {
        /**
         * Main content.
         */
        children: ReactNode;
        /**
         * Number of headers in the page. Used to calculate the total height.
         */
        headers: "0" | "1" | "2";
    }) {
    return (
        <main
            className={clsx(className, scrollableMainCSS({ headers }))}
            {...rest}
        >
            <div className={scrollableMainInnerCSS({ size })}>{children}</div>
        </main>
    );
}
