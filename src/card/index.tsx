import type { HTMLProps } from "react";

import clsx from "clsx";

import "./styles.css";

function CardRoot(props: HTMLProps<HTMLElement>) {
    return (
        <section
            {...props}
            className={clsx(props.className, "card")}
        />
    );
}

function CardHeader(props: HTMLProps<HTMLElement>) {
    return (
        <header
            {...props}
            className={clsx(props.className, "card-header")}
        />
    );
}

function CardBody(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(props.className, "card-body")}
        />
    );
}

function CardFooter(props: HTMLProps<HTMLElement>) {
    return (
        <footer
            {...props}
            className={clsx(props.className, "card-footer")}
        />
    );
}

/**
 * A `Card` is a section of a user interface that groups related information and actions.
 */
export const Card = {
    Body: CardBody,
    Footer: CardFooter,
    Header: CardHeader,
    Root: CardRoot,
};
