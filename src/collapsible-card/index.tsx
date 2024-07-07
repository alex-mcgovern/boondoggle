import type { ComponentProps } from "react";

import clsx from "clsx";

import { Card } from "../card";
import { Collapsible } from "../collapsible";
import "./styles.css";

function CollapsibleCardRoot({
    children,
    ...props
}: Omit<ComponentProps<typeof Collapsible.Root>, "asChild">) {
    return (
        <Collapsible.Root
            {...props}
            asChild
            className={clsx(props.className, "collapsible-card")}
        >
            <Card.Root>{children}</Card.Root>
        </Collapsible.Root>
    );
}

function CollapsibleCardHeader({
    children,
    ...props
}: Omit<ComponentProps<typeof Collapsible.Trigger>, "asChild">) {
    return (
        <Collapsible.Trigger
            {...props}
            asChild
        >
            <button className="collapsible-card-header-button">
                <Card.Header
                    className={clsx(props.className, "collapsible-card-header")}
                >
                    {children}
                </Card.Header>
            </button>
        </Collapsible.Trigger>
    );
}

function CollapsibleCardBody({
    children,
    ...props
}: Omit<ComponentProps<typeof Collapsible.Content>, "asChild">) {
    return (
        <Collapsible.Content
            {...props}
            asChild
        >
            <Card.Body
                className={clsx(props.className, "collapsible-card-body")}
            >
                {children}
            </Card.Body>
        </Collapsible.Content>
    );
}

/**
 * A `CollapsibleCard` is a section of a user interface that groups related information and actions.
 */
export const CollapsibleCard = {
    Body: CollapsibleCardBody,
    Header: CollapsibleCardHeader,
    Root: CollapsibleCardRoot,
};
