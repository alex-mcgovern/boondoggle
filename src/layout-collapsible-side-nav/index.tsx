"use client";

import { faSidebar } from "@fortawesome/pro-solid-svg-icons/faSidebar";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import type { ReactNode } from "react";
import * as React from "react";
import { Button } from "../button";
import { Icon } from "../icon";
import { MQ_SHOW_MOBILE_NAV } from "../index.css";
// import useMatchMedia from "use-match-media-hook";
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
	const getValue = (): boolean[] => {
		// Return the value for the given queries
		const matchedQueries = mediaQueryLists.map((mql) => mql.matches);

		return matchedQueries;
	};

	// State and setter for matched value
	const [value, setValue] = useState(getValue);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useLayoutEffect(() => {
		// Event listener callback
		// Note: By defining getValue outside of useEffect we ensure that it has ...
		// ... current values of hook args (as this hook only runs on mount/dismount).
		const handler = (): void => setValue(getValue);
		// Set a listener for each media query with above handler as callback.
		// biome-ignore lint/complexity/noForEach: <explanation>
		mediaQueryLists.forEach((mql) =>
			mql.addEventListener("change", handler),
		);
		// Remove listeners on cleanup
		return (): void =>
			// biome-ignore lint/complexity/noForEach: <explanation>
			mediaQueryLists.forEach((mql) =>
				mql.removeEventListener("change", handler),
			);
	}, []);

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
	const [isTabletPlus] = useMatchMedia([MQ_SHOW_MOBILE_NAV], [true]);
	const [isOpen, setIsOpen] = React.useState<boolean>(true);

	React.useEffect(() => {
		if (isTabletPlus) {
			return setIsOpen(true);
		}
		return setIsOpen(false);
	}, [isTabletPlus, setIsOpen]);

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
export const ButtonMobileMenu = () => {
	const [_, setIsOpen] = useCollapsibleSideNav();

	return (
		<Button
			size="square_sm"
			className={collapsibleNavButtonCSS}
			appearance="ghost"
			onClick={() => setIsOpen((c) => !c)}
			name="mobile_menu"
		>
			<Icon icon={faSidebar} />
		</Button>
	);
};

/**
 * An unstyled, primitive component for creating a collapsible UI element.
 */
export function CollapsibleSideNav({
	children,
	onOpenChange: controlledOnOpenChange,
}: {
	/**
	 * Dialog content
	 */
	children: ReactNode | Array<ReactNode>;

	/**
	 * Function called with new state when state changes.
	 */
	onOpenChange?: (openState: boolean) => void;
}) {
	const [isTabletPlus] = useMatchMedia([MQ_SHOW_MOBILE_NAV], [true]);

	const [isOpen, setIsOpen] = useCollapsibleSideNav();

	React.useEffect(() => {
		if (isTabletPlus) {
			return setIsOpen(true);
		}
		return setIsOpen(false);
	}, [isTabletPlus, setIsOpen]);

	return (
		<RadixCollapsible.Root
			onOpenChange={controlledOnOpenChange}
			open={isOpen}
		>
			<RadixCollapsible.Content
				className={collapsibleNavOuterCSS}
				asChild
			>
				<aside>
					<nav className={collapsibleNavInnerCSS}>{children}</nav>
				</aside>
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
}
