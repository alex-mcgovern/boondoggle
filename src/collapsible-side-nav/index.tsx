"use client";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { LinkProps } from "react-aria-components";

import { faAngleDoubleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/pro-solid-svg-icons/faAngleDoubleRight";
import { useCallback } from "react";
import { createContext, useContext, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-aria-components";

import { Button } from "../button";
import { css } from "../css/index.css";
import { Icon } from "../icon";
import { MEDIA_QUERY_MOBILE } from "../index.css";
import { Tooltip, TooltipTrigger } from "../tooltip";
import {
    collapsibleNavButtonCSS,
    collapsibleNavOuterCSS,
    iconCSS,
    sideNavLinkCSS,
} from "./styles.css";

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

export const CollapsibleSideNavProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [isMobile] = useMatchMedia([MEDIA_QUERY_MOBILE], [true]);
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
};

/**
 * Hook for consuming the CollapsibleSideNavContext.
 */
export const useCollapsibleSideNav = () => {
    const context = useContext(CollapsibleSideNavContext);

    if (context == null) {
        throw new Error(
            "CollapsibleSideNavContext must be used within a CollapsibleSideNavProvider",
        );
    }

    return context;
};

/**
 * Button for toggling the side nav
 */
export const ButtonToggleCollapsibleNav = () => {
    const [isOpen, setIsOpen] = useCollapsibleSideNav();

    return (
        <TooltipTrigger>
            <Button
                appearance="ghost"
                className={collapsibleNavButtonCSS}
                name="mobile_menu"
                onPress={() => setIsOpen((c) => !c)}
                size="square_sm"
            >
                <Icon icon={isOpen ? faAngleDoubleLeft : faAngleDoubleRight} />
            </Button>
            <Tooltip placement="right">
                {isOpen ? "Collapse" : "Expand"}
            </Tooltip>
        </TooltipTrigger>
    );
};

export function AppShell({ children }: { children: ReactNode }) {
    return (
        <div
            className={css({
                alignItems: "start",
                display: "flex",
                width: "100%",
            })}
        >
            {children}
        </div>
    );
}

/** -----------------------------------------------------------------------------
 * SideNavLink
 * ------------------------------------------------------------------------------- */

export type SideNavLinkProps = LinkProps & {
    icon: IconProp;
    isCurrent?: boolean;
};

export function SideNavLink({ icon, isCurrent, ...props }: SideNavLinkProps) {
    const [isOpen] = useCollapsibleSideNav();

    return (
        <TooltipTrigger isDisabled={isOpen}>
            <Link
                className={(renderProps) =>
                    sideNavLinkCSS({
                        ...renderProps,
                        isCurrent: !!isCurrent || !!renderProps.isCurrent,
                    })
                }
            >
                {(renderProps) => (
                    <>
                        <Icon
                            className={iconCSS}
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
            </Link>
            <Tooltip placement="right">
                {typeof props.children === "string" ? props.children : null}
            </Tooltip>
        </TooltipTrigger>
    );
}

/** -----------------------------------------------------------------------------
 * CollapsibleSideNav
 * ------------------------------------------------------------------------------- */

export function CollapsibleSideNav(props: { children: ReactNode }) {
    const [isOpen] = useCollapsibleSideNav();

    return (
        <nav
            className={collapsibleNavOuterCSS({
                isOpen: isOpen ? true : false,
            })}
        >
            {props.children}
            <ButtonToggleCollapsibleNav />
        </nav>
    );
}
