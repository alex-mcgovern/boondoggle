/* eslint-disable jsdoc/require-jsdoc */

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type {
    ComponentProps,
    Dispatch,
    HTMLProps,
    MutableRefObject,
    ReactNode,
    SetStateAction,
} from "react";
import type {
    DialogProps as AriaDialogProps,
    PopoverProps as AriaPopoverProps,
} from "react-aria-components";

import { faAngleDoubleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { forwardRef } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import {
    Dialog as AriaDialog,
    OverlayTriggerStateContext as AriaOverlayTriggerStateContext,
    Popover as AriaPopover,
} from "react-aria-components";
import { createPortal } from "react-dom";

import { Avatar } from "../avatar";
import { Button, LinkButton } from "../button";
import { Icon } from "../icon";
import { Skeleton } from "../skeleton";
import { Tooltip, TooltipTrigger } from "../tooltip";
import "./styles.css";

/** -----------------------------------------------------------------------------
 * Context
 * ------------------------------------------------------------------------------- */

// In order to allow collapsing the side nav from anywhere in the app
// we provide a context that allows direct access to the state and setter.
export const CollapsibleSideNavContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

// In order to allow portal-ing content into the `Drawer` from anywhere in the app
// we provide a ref via context, which can be used by the `Drawer` component to
// append the content to the correct DOM element.
export const AppDrawerContext =
    createContext<MutableRefObject<HTMLElement | null> | null>(null);

const useDrawerContext = () => {
    const drawer_ref = useContext(AppDrawerContext);
    if (!drawer_ref) {
        throw new Error("Drawer ref not found");
    }
    return drawer_ref;
};

/** -----------------------------------------------------------------------------
 * Utilities
 * ------------------------------------------------------------------------------- */

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

/** -----------------------------------------------------------------------------
 * Container — Wraps the entire app
 * ------------------------------------------------------------------------------- */

function AppRoot({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(
        localStorage.getItem("sideNavOpen") === "true",
    );

    const toggleSideNav = useCallback(() => {
        setIsOpen((c) => {
            localStorage.setItem("sideNavOpen", String(!c));
            return !c;
        });
    }, []);

    // Maintain a ref to the drawer container so that we can append content to it
    // This needs to be available globally, but set in a nested component, so using
    // context to pass it down.

    const drawer_ref = useRef<HTMLElement>(null);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, toggleSideNav]}>
            <AppDrawerContext.Provider value={drawer_ref}>
                <div
                    className="layout-container"
                    data-nav-open={isOpen}
                >
                    {children}
                </div>
            </AppDrawerContext.Provider>
        </CollapsibleSideNavContext.Provider>
    );
}

/** -----------------------------------------------------------------------------
 * Main - the `<main>` element and associated components
 * ------------------------------------------------------------------------------- */

function AppMainRoot({ children }: { children: ReactNode }) {
    return <main className="app-main">{children}</main>;
}

function AppMainHeader(props: HTMLProps<HTMLElement>) {
    return (
        <header
            {...props}
            className={clsx(props.className, "app-main-header")}
        />
    );
}

function AppMainToolbar(props: HTMLProps<HTMLElement>) {
    return (
        <section
            {...props}
            className={clsx(props.className, "app-main-toolbar")}
        />
    );
}

const AppMainContent = forwardRef<HTMLElement, { children: ReactNode }>(
    ({ children }, ref) => {
        return (
            <div className="app-main-content-container">
                <section
                    className="app-main-content"
                    ref={ref}
                >
                    {children}
                </section>
                <DrawerContainer />
            </div>
        );
    },
);

function AppMainFooter(props: HTMLProps<HTMLElement>) {
    return (
        <footer
            {...props}
            className={clsx(props.className, "app-main-footer")}
        />
    );
}

/** -----------------------------------------------------------------------------
 * Drawer
 * ------------------------------------------------------------------------------- */

function DrawerContainer() {
    const drawer_ref = useDrawerContext();
    return (
        <aside
            className="app-drawer-container"
            id="app-drawer-container"
            ref={drawer_ref}
        />
    );
}

function DrawerRoot({
    children,
    ...props
}: Omit<
    AriaPopoverProps,
    "children" | "isNonModal" | "shouldCloseOnInteractOutside"
> &
    Pick<AriaDialogProps, "children">) {
    const container = useDrawerContext();
    const [element, setElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (container.current) {
            setElement(container.current);
        }
    }, [container]);

    if (!element) {
        return null;
    }

    return (
        <AriaPopover
            {...props}
            isNonModal
            shouldCloseOnInteractOutside={() => false}
        >
            {createPortal(
                <AriaDialog className="app-drawer-dialog">
                    {(renderProps) => {
                        return typeof children === "function"
                            ? children(renderProps)
                            : children;
                    }}
                </AriaDialog>,
                element,
            )}
        </AriaPopover>
    );
}

function DrawerHeader(props: { children: ReactNode }) {
    return (
        <header
            className="app-drawer-header"
            {...props}
        />
    );
}

function DrawerContent(props: HTMLProps<HTMLElement>) {
    return (
        <section
            className="app-drawer-content"
            {...props}
        />
    );
}

function DrawerCloseButton() {
    const state = useContext(AriaOverlayTriggerStateContext)!;

    return (
        <Button
            appearance="ghost"
            aria-label="Close"
            className="ml-auto"
            name="close"
            onPress={() => state.close()}
            size="sm"
            square
            type="button"
        >
            <Icon icon={faTimes} />
        </Button>
    );
}

/** -----------------------------------------------------------------------------
 * Sidebar
 * ------------------------------------------------------------------------------- */

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
                className={clsx("app-nav-link", props.className)}
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
            className="app-nav"
            data-open={isOpen}
        >
            {props.children}
            <SideNavFooter>
                <ButtonToggleCollapsibleNav />
            </SideNavFooter>
        </nav>
    );
}

function Focused({ children }: { children: ReactNode }) {
    return <div className="app-main-focused">{children}</div>;
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
            className={clsx(className, "app-nav-header")}
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
            className={clsx(className, "app-nav-footer")}
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
            className={clsx(className, "app-nav-section")}
            {...rest}
        >
            {children}
        </section>
    );
}

export const App = {
    Button: NavButton,
    Container: AppRoot,
    Drawer: {
        CloseButton: DrawerCloseButton,
        Content: DrawerContent,
        Header: DrawerHeader,
        Root: DrawerRoot,
    },
    Focused,
    Link,
    Main: {
        Content: AppMainContent,
        Footer: AppMainFooter,
        Header: AppMainHeader,
        Root: AppMainRoot,
        Toolbar: AppMainToolbar,
    },
    OrgDisplay,
    SideBar,
    SideNavFooter: SideNavFooter,
    SideNavHeader: SideNavHeader,
    SideNavSection: SideNavSection,
    UserMenuHeader,
    useSideNav,
};
