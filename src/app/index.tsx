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
	ModalOverlayProps as AriaModalOverlayProps,
	DialogProps,
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
import { Heading } from "react-aria-components";
import {
	Dialog as AriaDialog,
	Modal,
	OverlayTriggerStateContext,
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
const NavContext = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

// In order to allow portal-ing content into the `Drawer` from anywhere in the app
// we provide a ref via context, which can be used by the `Drawer` component to
// append the content to the correct DOM element.
const DrawerContext =
	createContext<MutableRefObject<HTMLElement | null> | null>(null);

const useDrawerContext = () => {
	const drawer_ref = useContext(DrawerContext);
	if (!drawer_ref) {
		throw new Error("Drawer ref not found");
	}
	return drawer_ref;
};

/** -----------------------------------------------------------------------------
 * Utilities
 * ------------------------------------------------------------------------------- */

const useNavState = () => {
	const context = useContext(NavContext);

	if (context == null) {
		throw new Error("NavContext must be used within a Provider");
	}

	return context;
};

/**
 * Button for toggling the side nav
 */
function ButtonToggleCollapsibleNav() {
	const [isOpen, setIsOpen] = useNavState();

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
		<NavContext.Provider value={[isOpen, toggleSideNav]}>
			<DrawerContext.Provider value={drawer_ref}>
				<div
					className="layout-container"
					data-nav-open={isOpen}
				>
					{children}
				</div>
			</DrawerContext.Provider>
		</NavContext.Provider>
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
}: Omit<AriaModalOverlayProps, "children"> & Pick<DialogProps, "children">) {
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
		<Modal {...props}>
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
		</Modal>
	);
}

function DrawerHeader({
	children,
	title,
	...props
}: HTMLProps<HTMLElement> & { title: string }) {
	return (
		<header
			className="app-drawer-header"
			{...props}
		>
			<Heading level={3}>{title}</Heading>
			{children}
		</header>
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
	const state = useContext(OverlayTriggerStateContext)!;

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
 * Nav
 * ------------------------------------------------------------------------------- */

function NavRoot(props: { children: ReactNode }) {
	const [isOpen] = useNavState();

	return (
		<nav
			className="app-nav"
			data-open={isOpen}
		>
			{props.children}
			<NavFooter>
				<ButtonToggleCollapsibleNav />
			</NavFooter>
		</nav>
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
	const [isOpen] = useNavState();

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

function NavOrg({
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

function NavLink({
	align = "start",
	appearance = "ghost",
	icon,
	isCurrent,
	...props
}: Omit<ComponentProps<typeof LinkButton>, "sm" | "square"> & {
	icon: IconProp;
	isCurrent?: boolean;
}) {
	const [isOpen] = useNavState();

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

/**
 * Top bar HTML element.
 */
function NavHeader({
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
function NavFooter({
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
function NavSection({ children, className, ...rest }: HTMLProps<HTMLElement>) {
	return (
		<section
			className={clsx(className, "app-nav-section")}
			{...rest}
		>
			{children}
		</section>
	);
}

function Focused({ children }: { children: ReactNode }) {
	return <div className="app-main-focused">{children}</div>;
}

export const App = {
	Container: AppRoot,
	Drawer: {
		Context: DrawerContext,
		Root: DrawerRoot,
		CloseButton: DrawerCloseButton,
		Content: DrawerContent,
		Header: DrawerHeader,
	},
	Focused,
	Main: {
		Root: AppMainRoot,
		Content: AppMainContent,
		Footer: AppMainFooter,
		Header: AppMainHeader,
		Toolbar: AppMainToolbar,
	},
	Nav: {
		Root: NavRoot,
		Button: NavButton,
		Context: NavContext,
		Footer: NavFooter,
		Header: NavHeader,
		Link: NavLink,
		Org: NavOrg,
		Section: NavSection,
		useState: useNavState,
	},
	UserMenuHeader,
};
