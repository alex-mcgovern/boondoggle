import type { ComponentProps, ReactNode } from "react";

import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import {
    Dialog as ReactAriaDialog,
    DialogTrigger as ReactAriaDialogTrigger,
    Heading as ReactAriaHeading,
    Modal as ReactAriaModal,
    ModalOverlay as ReactAriaModalOverlay,
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
}: {
    close: () => void;
    title: string;
}) => {
    return (
        <header className={dialogHeaderCSS}>
            <ReactAriaHeading
                className={dialogTitleCSS}
                slot="title"
            >
                {title}
            </ReactAriaHeading>

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
};

/**
 * Wrapper to render scrollable content within the dialog.
 */
export const V2ScrollableDialogContent = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <div className={dialogContentCSS}>{children}</div>;
};

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export const V2DialogFooter = ({ children }: { children: ReactNode }) => {
    return <footer className={dialogFooterCSS}>{children}</footer>;
};

export const V2Dialog = ({
    buttonProps,
    children,
    colorOverlay,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
    width = "sm",
}: {
    buttonProps?: ComponentProps<typeof Button>;
    children: ComponentProps<typeof ReactAriaDialog>["children"];
    colorOverlay?: ColorOverlay;
    dialogTriggerProps?: Omit<
        ComponentProps<typeof ReactAriaDialogTrigger>,
        "children"
    >;
    modalOverlayProps?: Omit<
        ComponentProps<typeof ReactAriaModalOverlay>,
        "className"
    >;
    modalProps?: Omit<ComponentProps<typeof ReactAriaModal>, "className">;
    width?: "lg" | "sm";
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
