/* eslint-disable jsdoc/require-jsdoc */

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type {
    ComponentProps,
    Dispatch,
    ReactNode,
    SetStateAction,
} from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import { faAngleDoubleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";
import { useCallback } from "react";
import { createContext, useContext, useLayoutEffect } from "react";
import { useState } from "react";
import { Button as AriaButton } from "react-aria-components";

import { Avatar } from "../avatar";
import { Button, LinkButton } from "../button";
import { Icon } from "../icon";
import { Tooltip, TooltipTrigger } from "../tooltip";
import "./styles.css";

function useMatchMedia(
    queries: string[],
    defaultValues: boolean[] = [],
): boolean[] {
    const initialValues = defaultValues.length
        ? defaultValues
        : Array(queries.length).fill(false);

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValue = useCallback(
        () => mediaQueryLists.map((mql) => mql.matches),
        [mediaQueryLists],
    );

    const [value, setValue] = useState(getValue);

    useLayoutEffect(() => {
        const handler = (): void => setValue(getValue);

        for (const mql of mediaQueryLists) {
            mql.addEventListener("change", handler);
        }
        return (): void => {
            for (const mql of mediaQueryLists) {
                mql.removeEventListener("change", handler);
            }
        };
    }, [mediaQueryLists, getValue]);

    if (typeof window === "undefined") return initialValues;

    return value;
}

/**
 * React context provider that allows toggling the open state of a collapsible UI element from anywhere in the app.
 */
export const CollapsibleSideNavContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

function Provider({ children }: { children: ReactNode }) {
    const [isMobile] = useMatchMedia(["@media (max-width: 767px)"], [true]);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (isMobile) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }, [isMobile, setIsOpen]);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, setIsOpen]}>
            {children}
        </CollapsibleSideNavContext.Provider>
    );
}

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

export const useOpenOnMount = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useSideNav();

    return useLayoutEffect(() => {
        setIsOpen(true);
    }, [setIsOpen]);
};

export const useCloseOnMount = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useSideNav();

    return useLayoutEffect(() => {
        setIsOpen(false);
    }, [setIsOpen]);
};

/**
 * Button for toggling the side nav
 */
function ButtonToggleCollapsibleNav() {
    const [isOpen, setIsOpen] = useSideNav();

    return (
        <NavButton
            className="w-100"
            icon={isOpen ? faAngleDoubleLeft : faAngleDoubleRight}
            onPress={() => setIsOpen((c) => !c)}
        >
            {isOpen ? "Collapse" : "Expand"}
        </NavButton>
    );
}

function Container({ children }: { children: ReactNode }) {
    return (
        <Provider>
            <div className="nav-container">{children}</div>
        </Provider>
    );
}

function MainContent({ children }: { children: ReactNode }) {
    return (
        <Provider>
            <div className="main-content">{children}</div>
        </Provider>
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
                    size={32}
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
                size="sm"
                square={!isOpen}
            >
                {(renderProps) => (
                    <>
                        <Icon
                            color={
                                !!isCurrent || !!renderProps.isCurrent
                                    ? "text_high_contrast"
                                    : "text_low_contrast"
                            }
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
            <div className="btn-collapse-container">
                <ButtonToggleCollapsibleNav />
            </div>
        </nav>
    );
}

export const Navigation = {
    Button: NavButton,
    Container,
    Link,
    MainContent,
    Provider,
    SideBar,
    useCloseOnMount,
    useOpenOnMount,
    UserMenuHeader,
    UserMenuTrigger,
    useSideNav,
};
