import * as React from "react";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import {
	Dialog as ReactAriaDialog,
	DialogTrigger as ReactAriaDialogTrigger,
	Heading as ReactAriaHeading,
	Modal as ReactAriaModal,
	ModalOverlay as ReactAriaModalOverlay,
} from "react-aria-components";
import { sprinkles } from "../sprinkles/index.css";
import { Button } from "../v2-button";
import { Icon } from "../v2-icon";
import {
	mobileMenuCSS,
	mobileMenuContentCSS,
	mobileMenuFooterCSS,
	dialogHeaderCSS,
	dialogTitleCSS,
	mobileMenuModalCSS,
	mobileMenuOverlayCSS,
} from "./styles.css";
import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";

/**
 * Wrapper to render the dialog header.
 */
export const V2MobileMenuHeader = ({
	close,
	title,
}: { close: () => void; title: string }) => {
	return (
		<header className={dialogHeaderCSS}>
			<ReactAriaHeading slot="title" className={dialogTitleCSS}>
				{title}
			</ReactAriaHeading>

			<Button
				appearance="ghost"
				aria-label="Close"
				className={sprinkles({
					marginLeft: "auto",
				})}
				name="close"
				onPress={close}
				size="square_sm"
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
	dialogTriggerProps,
	children,
	modalProps,
	modalOverlayProps,
}: {
	dialogTriggerProps?: Omit<
		React.ComponentProps<typeof ReactAriaDialogTrigger>,
		"children"
	>;
	children: React.ComponentProps<typeof ReactAriaDialog>["children"];
	modalProps?: Omit<React.ComponentProps<typeof ReactAriaModal>, "className">;
	modalOverlayProps?: Omit<
		React.ComponentProps<typeof ReactAriaModalOverlay>,
		"className"
	>;
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
			<Button appearance="ghost" size="square_md">
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
