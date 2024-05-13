import type { ForwardedRef, ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import { faChevronRight } from "@fortawesome/pro-solid-svg-icons/faChevronRight";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useCallback, useState } from "react";
import { Button } from "react-aria-components";

import { Icon } from "../icon";
import "./styles.css";

/**
 * A trigger component for a collapsible element.
 */
export function CollapsibleTrigger(
    props: AriaButtonProps & { ref?: ForwardedRef<HTMLButtonElement> },
) {
    return (
        <Button
            {...props}
            className="collapsible-trigger"
            ref={props.ref}
        >
            {(rp) => {
                return (
                    <>
                        <Icon
                            className="collapsible-trigger-icon"
                            icon={faChevronRight}
                        />
                        {typeof props.children === "function"
                            ? props.children(rp)
                            : props.children}
                    </>
                );
            }}
        </Button>
    );
}

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
}: {
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
}) {
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
            className="collapsible"
            onOpenChange={handleOpenChange}
            open={localOpenState}
        >
            <RadixCollapsible.Trigger asChild>
                {triggerNode}
            </RadixCollapsible.Trigger>

            <RadixCollapsible.Content className="collapsible-content">
                {children}
            </RadixCollapsible.Content>
        </RadixCollapsible.Root>
    );
}
