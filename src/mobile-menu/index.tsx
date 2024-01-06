import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import * as React from "react";
import {
	Dialog as ReactAriaDialog,
	DialogTrigger as ReactAriaDialogTrigger,
	Heading as ReactAriaHeading,
	Modal as ReactAriaModal,
	ModalOverlay as ReactAriaModalOverlay,
} from "react-aria-components";

import { Button } from "../button";
import { Icon } from "../icon";
import { sprinkles } from "../sprinkles/index.css";
import {
	mobileMenuCSS,
	mobileMenuContentCSS,
	mobileMenuFooterCSS,
	mobileMenuHeaderCSS,
	mobileMenuModalCSS,
	mobileMenuOverlayCSS,
	mobileMenuTitleCSS,
} from "./styles.css";

/**
 * Wrapper to render the dialog header.
 */
export const V2MobileMenuHeader = ({
	children,
	close,
	title,
}: { children?: React.ReactNode; close: () => void; title?: string }) => {
	return (
		<header className={mobileMenuHeaderCSS}>
			{children}
			{title ? (
				<ReactAriaHeading className={mobileMenuTitleCSS} slot="title">
					{title}
				</ReactAriaHeading>
			) : null}

			<Button
				appearance="ghost"
				aria-label="Close"
				className={sprinkles({
					marginLeft: "auto",
				})}
				name="close"
				onPress={close}
				size="square_md"
				type="button"
			>
				<Icon icon={faTimes} />
			</Button>
		</header>
	);
};

/**
 * Wrapper to render scrollable content within the dialog.
 */
export const V2ScrollableMobileMenuContent = ({
	children,
}: { children: React.ReactNode }) => {
	return <div className={mobileMenuContentCSS}>{children}</div>;
};

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export const V2MobileMenuFooter = ({
	children,
}: { children: React.ReactNode }) => {
	return <footer className={mobileMenuFooterCSS}>{children}</footer>;
};

export const V2MobileMenu = ({
	children,
	dialogTriggerProps,
	modalOverlayProps,
	modalProps,
}: {
	children: React.ComponentProps<typeof ReactAriaDialog>["children"];
	dialogTriggerProps?: Omit<
		React.ComponentProps<typeof ReactAriaDialogTrigger>,
		"children"
	>;
	modalOverlayProps?: Omit<
		React.ComponentProps<typeof ReactAriaModalOverlay>,
		"className"
	>;
	modalProps?: Omit<React.ComponentProps<typeof ReactAriaModal>, "className">;
}) => {
	const [isOpen, setIsOpen] = React.useState(dialogTriggerProps?.isOpen);

	return (
		<ReactAriaDialogTrigger
			{...dialogTriggerProps}
			isOpen={isOpen}
			onOpenChange={(isOpen) => {
				setIsOpen(isOpen);
				dialogTriggerProps?.onOpenChange?.(isOpen);
			}}
		>
			<Button
				appearance="ghost"
				className={sprinkles({
					display: {
						desktop: "none",
						mobile: "inline-flex",
					},
				})}
				size="square_md"
			>
				<Icon icon={isOpen ? faTimes : faBars} />
			</Button>
			<ReactAriaModalOverlay
				className={mobileMenuOverlayCSS}
				{...modalOverlayProps}
			>
				<ReactAriaModal className={mobileMenuModalCSS} {...modalProps}>
					<ReactAriaDialog className={mobileMenuCSS}>
						{children}
					</ReactAriaDialog>
				</ReactAriaModal>
			</ReactAriaModalOverlay>
		</ReactAriaDialogTrigger>
	);
};
