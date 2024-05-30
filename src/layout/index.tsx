/* eslint-disable jsdoc/require-jsdoc */

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type {
    ComponentProps,
    Dispatch,
    HTMLProps,
    ReactNode,
    SetStateAction,
} from "react";

import { faAngleDoubleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";
import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import clsx from "clsx";
import { useCallback } from "react";
import { forwardRef } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

import { Avatar } from "../avatar";
import { Button, LinkButton } from "../button";
import { Icon } from "../icon";
import { Skeleton } from "../skeleton";
import { Tooltip, TooltipTrigger } from "../tooltip";
import "./styles.css";

/**
 * React context provider that allows toggling the open state of a collapsible UI element from anywhere in the app.
 */
export const CollapsibleSideNavContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

/**
 * Hook for consuming the CollapsibleSideNavContext.
 */
export const useSideNav = () => {
    const context = useContext(CollapsibleSideNavContext);

    if (context == null) {
        throw new Error(
            "CollapsibleSideNavContext must be used within a Provider",
        );
    }

    return context;
};

function Container({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(
        localStorage.getItem("sideNavOpen") === "true",
    );

    const toggleSideNav = useCallback(() => {
        setIsOpen((c) => {
            localStorage.setItem("sideNavOpen", String(!c));
            return !c;
        });
    }, []);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, toggleSideNav]}>
            <div
                className="layout-container"
                data-is-side-nav-open={isOpen}
            >
                {children}
            </div>
        </CollapsibleSideNavContext.Provider>
    );
}

/**
 * Button for toggling the side nav
 */
function ButtonToggleCollapsibleNav() {
    const [isOpen, setIsOpen] = useSideNav();

    return (
        <NavButton
            aria-label="Collapse/expand side-nav"
            className="w-100"
            icon={isOpen ? faAngleDoubleLeft : faAngleDoubleRight}
            onPress={() => setIsOpen((c) => !c)}
        >
            {isOpen ? "Collapse" : "Expand"}
        </NavButton>
    );
}

function Body({ children }: { children: ReactNode }) {
    return <div className="layout-body">{children}</div>;
}

function NavButton({
    align = "start",
    appearance = "ghost",
    icon,
    ...props
}: Omit<ComponentProps<typeof Button>, "sm" | "square"> & {
    icon: IconProp;
    isCurrent?: boolean;
}) {
    const [isOpen] = useSideNav();

    return (
        <TooltipTrigger isDisabled={isOpen}>
            <Button
                {...props}
                align={align}
                appearance={appearance}
                size="sm"
                square={!isOpen}
            >
                {(renderProps) => (
                    <>
                        <Icon icon={icon} />
                        <div className="hidden-when-collapsed">
                            {typeof props.children === "function"
                                ? props.children(renderProps)
                                : props.children}
                        </div>
                    </>
                )}
            </Button>
            <Tooltip placement="right">
                {typeof props.children === "string" ? props.children : null}
            </Tooltip>
        </TooltipTrigger>
    );
}

function OrgDisplay({
    className,
    image,
    isLoading,
    name,
}: {
    className?: string;
    image: string | undefined;
    isLoading?: boolean;
    name: string;
}) {
    return (
        <div className={clsx(className, "org-display")}>
            <Avatar
                name={name}
                size={28}
                src={image}
                variant="square"
            />
            {isLoading ? (
                <Skeleton className="w-100" />
            ) : (
                <div className="org-display-name hidden-when-collapsed">
                    {name}
                </div>
            )}
        </div>
    );
}

function UserMenuHeader(props: {
    avatarSrc: string | undefined;
    name: string;
    organization: string;
}) {
    return (
        <div className="user-menu-header">
            <Avatar
                name={props.name}
                size={32}
                src={props.avatarSrc}
                variant="square"
            />
            <div>
                <div className="user-menu-header-name">{props.name}</div>
                <div className="user-menu-header-org">{props.organization}</div>
            </div>
        </div>
    );
}

function Link({
    align = "start",
    appearance = "ghost",
    icon,
    isCurrent,
    ...props
}: Omit<ComponentProps<typeof LinkButton>, "sm" | "square"> & {
    icon: IconProp;
    isCurrent?: boolean;
}) {
    const [isOpen] = useSideNav();

    return (
        <TooltipTrigger isDisabled={isOpen}>
            <LinkButton
                {...props}
                align={align}
                appearance={appearance}
                className={clsx("side-nav-link", props.className)}
                isCurrent={isCurrent}
                size="sm"
                square={!isOpen}
            >
                {(renderProps) => (
                    <>
                        <Icon
                            // color={
                            //     !!isCurrent || !!renderProps.isCurrent
                            //         ? "text_high_contrast"
                            //         : "text_low_contrast"
                            // }
                            icon={icon}
                        />
                        <div className="hidden-when-collapsed">
                            {typeof props.children === "function"
                                ? props.children(renderProps)
                                : props.children}
                        </div>
                    </>
                )}
            </LinkButton>
            <Tooltip placement="right">
                {typeof props.children === "string" ? props.children : null}
            </Tooltip>
        </TooltipTrigger>
    );
}

function SideBar(props: { children: ReactNode }) {
    const [isOpen] = useSideNav();

    return (
        <nav
            className="side-nav"
            data-open={isOpen}
        >
            {props.children}
            <SideNavFooter>
                <ButtonToggleCollapsibleNav />
            </SideNavFooter>
        </nav>
    );
}

/**
 * Top bar HTML element.
 */
function TopNav({ children, className, ...rest }: HTMLProps<HTMLElement>) {
    return (
        <nav
            className={clsx(className, "layout-top-nav")}
            {...rest}
        >
            {children}
        </nav>
    );
}

function TopNavLeft({
    children,
    className,
    ...rest
}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "layout-top-nav-left")}
            {...rest}
        >
            {children}
        </div>
    );
}

function TopNavCenter({
    children,
    className,
    ...rest
}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "layout-top-nav-center")}
            {...rest}
        >
            {children}
        </div>
    );
}

function TopNavRight({
    children,
    className,
    ...rest
}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "layout-top-nav-right")}
            {...rest}
        >
            {children}
        </div>
    );
}

/**
 * Top bar HTML element.
 */
function Header({
    backHref,
    center,
    children,
    className,
    title,
    ...rest
}: HTMLProps<HTMLElement> & {
    backHref?: string;
    center?: boolean;
    title?: string;
}) {
    return (
        <header
            className={clsx(className, "layout-header", { center })}
            {...rest}
        >
            <div className="header-back-button">
                <LinkButton
                    appearance="ghost"
                    href={backHref}
                    isDisabled={!backHref}
                    square
                >
                    <Icon icon={faAngleLeft} />
                </LinkButton>
            </div>

            <div className="layout-header-content">
                {title ? (
                    <h1 className="layout-header-title">{title}</h1>
                ) : null}
                {children}
            </div>
        </header>
    );
}

/**
 * Bottom bar HTML element.
 */
function Footer({ children, className, ...rest }: HTMLProps<HTMLElement>) {
    return (
        <footer
            className={clsx(className, "layout-footer")}
            {...rest}
        >
            {children}
        </footer>
    );
}

function MainContentContainer({ children }: { children: ReactNode }) {
    return <main className="main-content-container">{children}</main>;
}

const MainContent = forwardRef<HTMLElement, { children: ReactNode }>(
    ({ children }, ref) => {
        return (
            <section
                className="main-content"
                ref={ref}
            >
                {children}
            </section>
        );
    },
);

function Focused({ children }: { children: ReactNode }) {
    return <div className="layout-focused">{children}</div>;
}

/**
 * Top bar HTML element.
 */
function SideNavHeader({
    children,
    className,
    ...rest
}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "side-nav-header")}
            {...rest}
        >
            {children}
        </div>
    );
}

/**
 * Bottom bar HTML element.
 */
function SideNavFooter({
    children,
    className,
    ...rest
}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "side-nav-footer")}
            {...rest}
        >
            {children}
        </div>
    );
}

/**
 * Bottom bar HTML element.
 */
function SideNavSection({
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement>) {
    return (
        <section
            className={clsx(className, "side-nav-section")}
            {...rest}
        >
            {children}
        </section>
    );
}

export const Layout = {
    Body: Body,
    Button: NavButton,
    Container,
    Focused,
    Footer,
    Header: Header,
    Link,
    MainContent,
    MainContentContainer,
    OrgDisplay,
    SideBar,
    SideNavFooter: SideNavFooter,
    SideNavHeader: SideNavHeader,
    SideNavSection: SideNavSection,
    TopNav: TopNav,
    TopNavCenter: TopNavCenter,
    TopNavLeft: TopNavLeft,
    TopNavRight: TopNavRight,
    UserMenuHeader,
    useSideNav,
};
