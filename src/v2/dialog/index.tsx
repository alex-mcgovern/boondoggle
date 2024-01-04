import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import {
	Dialog as ReactAriaDialog,
	DialogTrigger as ReactAriaDialogTrigger,
	Heading as ReactAriaHeading,
	Modal as ReactAriaModal,
	ModalOverlay as ReactAriaModalOverlay,
} from "react-aria-components";
import { ColorOverlay } from "../../index.css";
import { sprinkles } from "../../v1/sprinkles/index.css";
import { Button } from "../../button";
import { Icon } from "../icon";
import {
	dialogCSS,
	dialogContentCSS,
	dialogFooterCSS,
	dialogHeaderCSS,
	dialogTitleCSS,
	modalCSS,
	modalOverlayCSS,
} from "./styles.css";

/**
 * Wrapper to render the dialog header.
 */
export const V2DialogHeader = ({
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
export const V2ScrollableDialogContent = ({
	children,
}: { children: React.ReactNode }) => {
	return <div className={dialogContentCSS}>{children}</div>;
};

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export const V2DialogFooter = ({ children }: { children: React.ReactNode }) => {
	return <footer className={dialogFooterCSS}>{children}</footer>;
};

export const V2Dialog = ({
	buttonProps,
	colorOverlay,
	dialogTriggerProps,
	width = "sm",
	children,
	modalProps,
	modalOverlayProps,
}: {
	buttonProps?: React.ComponentProps<typeof Button>;
	colorOverlay?: ColorOverlay;
	dialogTriggerProps?: Omit<
		React.ComponentProps<typeof ReactAriaDialogTrigger>,
		"children"
	>;
	width?: "sm" | "lg";
	children: React.ComponentProps<typeof ReactAriaDialog>["children"];
	modalProps?: Omit<React.ComponentProps<typeof ReactAriaModal>, "className">;
	modalOverlayProps?: Omit<
		React.ComponentProps<typeof ReactAriaModalOverlay>,
		"className"
	>;
}) => {
	return (
		<ReactAriaDialogTrigger {...dialogTriggerProps}>
			{buttonProps ? <Button {...buttonProps} /> : null}
			<ReactAriaModalOverlay
				className={modalOverlayCSS}
				{...modalOverlayProps}
			>
				<ReactAriaModal
					className={modalCSS({ colorOverlay, width })}
					{...modalProps}
				>
					<ReactAriaDialog className={dialogCSS}>
						{children}
					</ReactAriaDialog>
				</ReactAriaModal>
			</ReactAriaModalOverlay>
		</ReactAriaDialogTrigger>
	);
};
