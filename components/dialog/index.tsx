import type { ComponentProps, ReactNode } from "react";
import type { DialogProps as RACDialogProps } from "react-aria-components";

import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
    Heading as RACHeading,
    Modal as RACModal,
    ModalOverlay as RACModalOverlay,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import { Button } from "../button";
import { Icon } from "../icon";
import "./styles.css";

export type DialogProps = RACDialogProps;

/**
 * A dialog is an overlay shown above other content in an application. [Built with React Aria Dialog component](https://react-spectrum.adobe.com/react-aria/Dialog.html)
 */
export function Dialog(props: DialogProps) {
    return (
        <RACDialog
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
            <RACHeading
                className="dialog-title"
                slot="title"
            >
                {title}
            </RACHeading>

            <Button
                appearance="ghost"
                aria-label="Close"
                className="ml-auto"
                name="close"
                onPress={close}
                size="square_sm"
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
    colorOverlay,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
    width = "sm",
}: {
    buttonProps?: ComponentProps<typeof Button>;
    children: ComponentProps<typeof RACDialog>["children"];
    /**
     * Color overlay, used to convey semantic meaning.
     * -   `amber`: To indicate caution, or warning actions
     * -   `blue`: To indicate information, or neutral actions
     * -   `green`: To indicate success, or confirmatory actions
     * -   `grey`: When a subtle, neutral color is needed
     * -   `red`: To warn of potentially destructive actions
     * -   `default`: To reset the color overlay if inherited from a parent
     */
    colorOverlay?: ColorOverlay;
    dialogTriggerProps?: Omit<
        ComponentProps<typeof RACDialogTrigger>,
        "children"
    >;
    modalOverlayProps?: Omit<
        ComponentProps<typeof RACModalOverlay>,
        "className"
    >;
    modalProps?: Omit<ComponentProps<typeof RACModal>, "className">;
    width?: "lg" | "sm";
}) {
    return (
        <RACDialogTrigger {...dialogTriggerProps}>
            {buttonProps ? <Button {...buttonProps} /> : null}
            <RACModalOverlay
                className="dialog-overlay"
                {...modalOverlayProps}
            >
                <RACModal
                    className="dialog-modal"
                    {...modalProps}
                >
                    <Dialog className={width}>{children}</Dialog>
                </RACModal>
            </RACModalOverlay>
        </RACDialogTrigger>
    );
}
