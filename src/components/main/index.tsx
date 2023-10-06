import clsx from "clsx";

import { mainStyles } from "./styles.css";

import type { HTMLProps, ReactNode } from "react";

export type MainProps = HTMLProps<HTMLElement> & {
    children: ReactNode;
};

/**
 * Main HTML element.
 */
export function Main({ children, className, ...rest }: MainProps) {
    return (
        <main
            className={clsx(className, mainStyles)}
            {...rest}
        >
            {children}
        </main>
    );
}
