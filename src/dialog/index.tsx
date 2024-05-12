import type { ComponentProps, ReactNode } from "react";
import type { DialogProps as AriaDialogProps } from "react-aria-components";

import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
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
export function Dialog(props: AriaDialogProps) {
    return (
        <AriaDialog
            {...props}
            className={clsx(props.className, "dialog")}
        />
    );
}

/**
 * Wrapper to render the dialog header.
 */
export function DialogHeader({
    close,
    title,
}: {
    close: () => void;
    title: string;
}) {
    return (
        <header className="dialog-header">
            <AriaHeading
                className="dialog-title"
                slot="title"
            >
                {title}
            </AriaHeading>

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
        </header>
    );
}

/**
 * Wrapper to render scrollable content within the dialog.
 */
export function ScrollableDialogContent({ children }: { children: ReactNode }) {
    return <div className="dialog-content">{children}</div>;
}

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export function DialogFooter({ children }: { children: ReactNode }) {
    return <footer className="dialog-footer">{children}</footer>;
}

/**
 * Wrapper to render a dialog with a button trigger.
 * @deprecated
 */
export function DialogOld({
    buttonProps,
    children,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
    width = "sm",
}: {
    buttonProps?: ComponentProps<typeof Button>;
    children: ComponentProps<typeof AriaDialog>["children"];
    dialogTriggerProps?: Omit<
        ComponentProps<typeof AriaDialogTrigger>,
        "children"
    >;
    modalOverlayProps?: Omit<
        ComponentProps<typeof AriaModalOverlay>,
        "className"
    >;
    modalProps?: Omit<ComponentProps<typeof AriaModal>, "className">;
    width?: "lg" | "sm";
}) {
    return (
        <AriaDialogTrigger {...dialogTriggerProps}>
            {buttonProps ? <Button {...buttonProps} /> : null}
            <AriaModalOverlay
                className="dialog-overlay"
                {...modalOverlayProps}
            >
                <AriaModal
                    className="dialog-modal"
                    {...modalProps}
                >
                    <Dialog className={width}>{children}</Dialog>
                </AriaModal>
            </AriaModalOverlay>
        </AriaDialogTrigger>
    );
}
