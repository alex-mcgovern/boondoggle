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
import { css } from "../css/index.css";
import { Icon } from "../icon";
import {
    dialogCSS,
    dialogContentCSS,
    dialogFooterCSS,
    dialogHeaderCSS,
    dialogModalCSS,
    dialogTitleCSS,
    modalCSS,
    modalOverlayCSS,
} from "./styles.css";

export type DialogProps = RACDialogProps;

export function Dialog(props: DialogProps) {
    return (
        <RACDialog
            {...props}
            className={clsx(props.className, dialogCSS)}
        />
    );
}

export function DialogHeader({
    close,
    title,
}: {
    close: () => void;
    title: string;
}) {
    return (
        <header className={dialogHeaderCSS}>
            <RACHeading
                className={dialogTitleCSS}
                slot="title"
            >
                {title}
            </RACHeading>

            <Button
                appearance="ghost"
                aria-label="Close"
                className={css({
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
}

/**
 * Wrapper to render scrollable content within the dialog.
 */
export function ScrollableDialogContent({ children }: { children: ReactNode }) {
    return <div className={dialogContentCSS}>{children}</div>;
}

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export function DialogFooter({ children }: { children: ReactNode }) {
    return <footer className={dialogFooterCSS}>{children}</footer>;
}

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
                className={modalOverlayCSS}
                {...modalOverlayProps}
            >
                <RACModal
                    className={modalCSS({ colorOverlay, width })}
                    {...modalProps}
                >
                    <Dialog className={dialogModalCSS}>{children}</Dialog>
                </RACModal>
            </RACModalOverlay>
        </RACDialogTrigger>
    );
}
