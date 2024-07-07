import type { ForwardedRef } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import { faChevronRight } from "@fortawesome/pro-solid-svg-icons/faChevronRight";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { Button } from "react-aria-components";

import { Icon } from "../icon";
import "./styles.css";

function TriggerButton(
    props: { ref?: ForwardedRef<HTMLButtonElement> } & AriaButtonProps,
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

function CollapsibleTrigger(props: RadixCollapsible.CollapsibleTriggerProps) {
    return <RadixCollapsible.Trigger {...props}></RadixCollapsible.Trigger>;
}

function CollapsibleContent({
    children,
    ...props
}: RadixCollapsible.CollapsibleContentProps) {
    return (
        <RadixCollapsible.Content
            {...props}
            className={clsx(props.className, "collapsible-content")}
        >
            <div>{children}</div>
        </RadixCollapsible.Content>
    );
}

function CollapsibleRoot(props: RadixCollapsible.CollapsibleProps) {
    return (
        <RadixCollapsible.Root
            {...props}
            className={clsx(props.className, "collapsible")}
        />
    );
}

/**
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
 * import { Collapsible } from "boondoggle";
 * ```
 */
export const Collapsible = {
    Content: CollapsibleContent,
    Root: CollapsibleRoot,
    Trigger: CollapsibleTrigger,
    TriggerButton: TriggerButton,
};
