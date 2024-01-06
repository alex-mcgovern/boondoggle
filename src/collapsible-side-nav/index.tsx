"use client";

import type { ReactNode } from "react";

import { faSidebar } from "@fortawesome/pro-solid-svg-icons/faSidebar";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import * as React from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { MEDIA_QUERY_MOBILE } from "../index.css";
import {
	collapsibleNavButtonCSS,
	collapsibleNavInnerCSS,
	collapsibleNavOuterCSS,
} from "./styles.css";

function useMatchMedia(
	queries: string[],
	defaultValues: boolean[] = [],
): boolean[] {
	const initialValues = defaultValues.length
		? defaultValues
		: Array(queries.length).fill(false);

	if (typeof window === "undefined") return initialValues;

	const mediaQueryLists = queries.map((q) => window.matchMedia(q));
	const getValue = () => mediaQueryLists.map((mql) => mql.matches);

	const [value, setValue] = useState(getValue);

	React.useLayoutEffect(() => {
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

	return value;
}

/**
 * React context provider that allows toggling the open state of a collapsible UI element from anywhere in the app.
 */
export const CollapsibleSideNavContext = React.createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CollapsibleSideNavProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isMobile] = useMatchMedia([MEDIA_QUERY_MOBILE], [true]);
	const [isOpen, setIsOpen] = React.useState<boolean>(true);

	React.useLayoutEffect(() => {
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
	const context = React.useContext(CollapsibleSideNavContext);

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
	const [_, setIsOpen] = useCollapsibleSideNav();

	return (
		<Button
			appearance="ghost"
			className={collapsibleNavButtonCSS}
			name="mobile_menu"
			onPress={() => setIsOpen((c) => !c)}
			size="square_sm"
		>
			<Icon icon={faSidebar} />
		</Button>
	);
};

export function CollapsibleSideNav({
	children,
	isOpen: controlledIsOpen,
	onOpenChange: controlledOnOpenChange,
}: {
	children: Array<ReactNode> | ReactNode;
	isOpen?: boolean;
	onOpenChange?: (openState: boolean) => void;
}) {
	const [isMobile] = useMatchMedia([MEDIA_QUERY_MOBILE], [true]);

	const [isOpen, setIsOpen] = useCollapsibleSideNav();

	React.useLayoutEffect(() => {
		if (controlledIsOpen !== undefined) {
			return setIsOpen(controlledIsOpen);
		}

		if (isMobile) {
			return setIsOpen(false);
		}
		return setIsOpen(true);
	}, [isMobile, setIsOpen, controlledIsOpen]);

	return (
		<RadixCollapsible.Root
			onOpenChange={controlledOnOpenChange}
			open={isOpen}
		>
			<RadixCollapsible.Content
				asChild
				className={collapsibleNavOuterCSS}
			>
				<aside>
					<nav className={collapsibleNavInnerCSS}>{children}</nav>
				</aside>
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
}
