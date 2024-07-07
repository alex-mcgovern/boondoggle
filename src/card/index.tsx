import clsx from "clsx";
import { type HTMLProps, forwardRef } from "react";

import "./styles.css";

function CardRoot(props: HTMLProps<HTMLElement>) {
    return (
        <section
            {...props}
            className={clsx(props.className, "card")}
        />
    );
}

const CardHeader = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
    (props, ref) => {
        return (
            <header
                {...props}
                className={clsx(props.className, "card-header")}
                ref={ref}
            />
        );
    },
);

const CardBody = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <div
                {...props}
                className={clsx(props.className, "card-body")}
                ref={ref}
            />
        );
    },
);

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
