import type { ReactNode } from "react";
type LinkProps = {
    children: ReactNode;
    href: string;
    id?: string;
};
export declare function Link({ children, href, ...rest }: LinkProps): import("react/jsx-runtime").JSX.Element;
export {};
