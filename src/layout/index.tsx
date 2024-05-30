/* eslint-disable jsdoc/require-jsdoc */

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type {
    ComponentProps,
    Dispatch,
    HTMLProps,
    ReactNode,
    SetStateAction,
} from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import { faAngleDoubleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";
import clsx from "clsx";
import { forwardRef } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import { Button as AriaButton } from "react-aria-components";

import { Avatar } from "../avatar";
import { Button, LinkButton } from "../button";
import { Icon } from "../icon";
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

function Container({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, setIsOpen]}>
            <div
                className="layout-container"
                data-is-side-nav-open={isOpen}
            >
                {children}
            </div>
        </CollapsibleSideNavContext.Provider>
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
                        {isOpen &&
                            (typeof props.children === "function"
                                ? props.children(renderProps)
                                : props.children)}
                    </>
                )}
            </Button>
            <Tooltip placement="right">
                {typeof props.children === "string" ? props.children : null}
            </Tooltip>
        </TooltipTrigger>
    );
}

function UserMenuTrigger(
    props: Omit<AriaButtonProps, "children"> & {
        image: string | undefined;
        isCurrent?: boolean;
        name: string;
    },
) {
    const [isOpen] = useSideNav();

    return (
        <TooltipTrigger isDisabled={isOpen}>
            <AriaButton
                {...props}
                className="user-menu-trigger"
            >
                <Avatar
                    name={props.name}
                    size={28}
                    src={props.image}
                    variant="square"
                />
                {isOpen && (
                    <div className="user-menu-trigger-name">{props.name}</div>
                )}
            </AriaButton>
            <Tooltip placement="right">Signed in as {props.name}</Tooltip>
        </TooltipTrigger>
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
                        {isOpen &&
                            (typeof props.children === "function"
                                ? props.children(renderProps)
                                : props.children)}
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
    center,
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement> & { center?: boolean }) {
    return (
        <header
            className={clsx(className, "layout-header", { center })}
            {...rest}
        >
            {children}
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
    SideBar,
    SideNavFooter: SideNavFooter,
    SideNavHeader: SideNavHeader,
    SideNavSection: SideNavSection,
    TopNav: TopNav,
    TopNavCenter: TopNavCenter,
    TopNavLeft: TopNavLeft,
    TopNavRight: TopNavRight,
    UserMenuHeader,
    UserMenuTrigger,
    useSideNav,
};
