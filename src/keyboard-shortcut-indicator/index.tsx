import type { HTMLProps } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * Signals that a keyboard shortcut is available for the user to use.
 */
export function KeyboardShortcutIndicator(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(props.className, "keyboard-shortcut-indicator")}
        />
    );
}
