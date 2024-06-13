import type { ReactNode } from "react";
import type {
    DialogProps as AriaDialogProps,
    DialogTriggerProps as AriaDialogTriggerProps,
    ModalOverlayProps as AriaModalOverlayProps,
} from "react-aria-components";

import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import { useContext } from "react";
import { OverlayTriggerStateContext } from "react-aria-components";
import {
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Heading as AriaHeading,
    Modal as AriaModal,
    ModalOverlay as AriaModalOverlay,
} from "react-aria-components";

import { Button } from "../button";
import { Icon } from "../icon";
import "./styles.css";

/**
 * A dialog is an overlay shown above other content in an application. [Built with React Aria Dialog component](https://react-spectrum.adobe.com/react-aria/Dialog.html)
 */
function DialogComponent({
    width = "sm",
    ...props
}: AriaDialogProps & { width?: "lg" | "sm" }) {
    return (
        <AriaDialog
            {...props}
            className={clsx(props.className, "dialog", width)}
        />
    );
}

/**
 * Wrapper to render the dialog header.
 */
function DialogHeader(props: { children: ReactNode }) {
    return (
        <header
            className="dialog-header"
            {...props}
        />
    );
}

function DialogTitle({ children }: { children: string }) {
    return (
        <AriaHeading
            className="dialog-title"
            slot="title"
        >
            {children}
        </AriaHeading>
    );
}

function DialogCloseButton() {
    const { close } = useContext(OverlayTriggerStateContext)!;
    return (
        <Button
            appearance="ghost"
            aria-label="Close"
            className="ml-auto"
            name="close"
            onPress={close}
            size="sm"
            square
            type="button"
        >
            <Icon icon={faTimes} />
        </Button>
    );
}

/**
 * Wrapper to render scrollable content within the dialog.
 */
function ScrollableDialogContent({ children }: { children: ReactNode }) {
    return <div className="dialog-content">{children}</div>;
}

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
function DialogFooter({ children }: { children: ReactNode }) {
    return <footer className="dialog-footer">{children}</footer>;
}

function DialogModal(props: AriaModalOverlayProps) {
    return (
        <AriaModal
            {...props}
            className={clsx(props.className, "dialog-modal")}
        />
    );
}

function DialogModalOverlay(props: AriaModalOverlayProps) {
    return (
        <AriaModalOverlay
            {...props}
            className={clsx(props.className, "dialog-modal-overlay")}
        />
    );
}

function DialogTrigger(props: AriaDialogTriggerProps) {
    return <AriaDialogTrigger {...props} />;
}

/**
 * Dialog components built with React Aria Dialog component.
 */
export const Dialog = {
    CloseButton: DialogCloseButton,
    Content: ScrollableDialogContent,
    Footer: DialogFooter,
    Header: DialogHeader,
    Modal: DialogModal,
    ModalOverlay: DialogModalOverlay,
    Root: DialogComponent,
    Title: DialogTitle,
    Trigger: DialogTrigger,
};
