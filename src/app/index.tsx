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
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
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

export const CollapsibleSideNavContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export const useSideNav = () => {
    const context = useContext(CollapsibleSideNavContext);

    if (context == null) {
        throw new Error(
            "CollapsibleSideNavContext must be used within a Provider",
        );
    }

    return context;
};

const DrawerContext = createContext<
    [ReactNode, Dispatch<SetStateAction<ReactNode | null>>]
>([null, () => {}]);

const useDrawer = () => {
    const context = useContext(DrawerContext);

    if (context == null) {
        throw new Error("DrawerContext must be used within a Provider");
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

    const [drawerContent, setDrawerContent] = useState<ReactNode | null>(null);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, toggleSideNav]}>
            <DrawerContext.Provider value={[drawerContent, setDrawerContent]}>
                <div
                    className="layout-container"
                    data-nav-open={isOpen}
                >
                    {children}
                </div>
            </DrawerContext.Provider>
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

const AppMainContent = forwardRef<HTMLElement, { children: ReactNode }>(
    ({ children }, ref) => {
        const [drawerContent] = useDrawer();

        return (
            <div className="app-main-content-container">
                <section
                    className="app-main-content"
                    ref={ref}
                >
                    {children}
                </section>
                <AppDrawer>{drawerContent}</AppDrawer>
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

const AppDrawer = forwardRef<HTMLElement, { children: ReactNode }>(
    ({ children }, ref) => {
        return (
            <aside
                className="app-drawer"
                id="app-drawer"
                ref={ref}
            >
                {children}
            </aside>
        );
    },
);

function AppDrawerCloseButton() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setDrawer] = useDrawer();

    return (
        <Button
            appearance="ghost"
            aria-label="Close"
            className="ml-auto"
            name="close"
            onPress={() => setDrawer(null)}
            size="sm"
            square
            type="button"
        >
            <Icon icon={faTimes} />
        </Button>
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
    AppDrawer: { CloseButton: AppDrawerCloseButton },
    Button: NavButton,
    Container,
    Focused,
    Link,
    Main: {
        Content: AppMainContent,
        Footer: AppMainFooter,
        Header: AppMainHeader,
        Root: AppMainRoot,
    },
    OrgDisplay,
    SideBar,
    SideNavFooter: SideNavFooter,
    SideNavHeader: SideNavHeader,
    SideNavSection: SideNavSection,
    useDrawer,
    UserMenuHeader,
    useSideNav,
};
