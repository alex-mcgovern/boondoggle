import type { ReactNode } from "react";

import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useCallback, useState } from "react";

import "./styles.css";

export type CollapsibleProps = {
    /**
     * Dialog content
     */
    children: Array<ReactNode> | ReactNode;

    /**
     * Allow collapsible to act as a controlled component
     */
    isOpen?: boolean;

    /**
     * Function called with new state when state changes.
     */
    onOpenChange?: (openState: boolean) => void;

    /**
     * Element to use as Dialog trigger. Note: Must accept a ref.
     */
    triggerNode: ReactNode;
};

/**
 * @deprecated
 *
 * An unstyled, primitive component for creating a collapsible UI element.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Collapsible, type CollapsibleProps } from "boondoggle/collapsible"
 * ```
 */
export function Collapsible({
    children,
    isOpen,
    onOpenChange,
    triggerNode,
}: CollapsibleProps) {
    const [localOpenState, setLocalOpenState] = useState(isOpen);

    const handleOpenChange = useCallback(
        (openState: boolean) => {
            setLocalOpenState(openState);

            if (onOpenChange) {
                onOpenChange(openState);
            }
        },
        [onOpenChange],
    );

    return (
        <RadixCollapsible.Root
            onOpenChange={handleOpenChange}
            open={localOpenState}
        >
            <RadixCollapsible.Trigger asChild>
                {triggerNode}
            </RadixCollapsible.Trigger>

            <RadixCollapsible.Content className="collapsible">
                {children}
            </RadixCollapsible.Content>
        </RadixCollapsible.Root>
    );
}
