import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useCallback, useState } from "react";

import { collapsibleContentAnimation } from "./collapsible.styles.css";

import type { ReactNode } from "react";

export interface CollapsibleProps {
    /** Element to use as Dialog trigger. Note: Must accept a ref. */
    triggerNode: ReactNode;
    /** Dialog content */
    children: ReactNode | Array<ReactNode>;
    /** Function called with new state when state changes. */
    onOpenChange: (openState: boolean) => void;
    /** Allow collapsible to act as a controlled component */
    isOpen: boolean;
}

export function Collapsible({
    triggerNode,
    children,
    isOpen,
    onOpenChange,
}: CollapsibleProps) {
    const [localOpenState, setLocalOpenState] = useState(isOpen);

    const handleOpenChange = useCallback(
        (openState: boolean) => {
            setLocalOpenState(openState);
            onOpenChange(openState);
        },
        [onOpenChange]
    );

    return (
        <CollapsiblePrimitive.Root
            open={localOpenState}
            onOpenChange={handleOpenChange}
        >
            {/**
             * Allow custom trigger node. Must accept a ref.
             * ToDo: Figure out a tidy way to require triggerNode to accept ref,
             * or to wrap triggerNode so it is always able to accept a ref.
             */}
            <CollapsiblePrimitive.Trigger asChild>
                {triggerNode}
            </CollapsiblePrimitive.Trigger>

            <CollapsiblePrimitive.Content
                className={collapsibleContentAnimation}
            >
                {children}
            </CollapsiblePrimitive.Content>
        </CollapsiblePrimitive.Root>
    );
}
