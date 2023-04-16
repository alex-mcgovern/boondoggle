import type { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode;
    id?: string;
}

export function Link({ href, children, ...rest }: LinkProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer" {...rest}>
            {children}
        </a>
    );
}
