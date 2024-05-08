import type { ComponentProps, ReactNode } from "react";

import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { useState } from "react";
import {
    Dialog as ReactAriaDialog,
    DialogTrigger as ReactAriaDialogTrigger,
    Heading as ReactAriaHeading,
    Modal as ReactAriaModal,
    ModalOverlay as ReactAriaModalOverlay,
} from "react-aria-components";

import { Button } from "../button";
import { Icon } from "../icon";
import "./styles.css";

/**
 * Wrapper to render the dialog header.
 */
export function MobileMenuHeader({
    children,
    close,
    title,
}: {
    children?: ReactNode;
    close: () => void;
    title?: string;
}) {
    return (
        <header className="mobile-menu-header">
            {children}
            {title ? (
                <ReactAriaHeading
                    className="mobile-menu-title"
                    slot="title"
                >
                    {title}
                </ReactAriaHeading>
            ) : null}

            <Button
                appearance="ghost"
                aria-label="Close"
                className="ml-auto"
                name="close"
                onPress={close}
                size="square_md"
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
export function ScrollableMobileMenuContent({
    children,
}: {
    children: ReactNode;
}) {
    return <div className="mobile-menu-content">{children}</div>;
}

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export function MobileMenuFooter({ children }: { children: ReactNode }) {
    return <footer className="mobile-menu-footer">{children}</footer>;
}

/**
 * A pre-composed mobile menu component.
 */
export function MobileMenu({
    children,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
}: {
    children: ComponentProps<typeof ReactAriaDialog>["children"];
    dialogTriggerProps?: Omit<
        ComponentProps<typeof ReactAriaDialogTrigger>,
        "children"
    >;
    modalOverlayProps?: Omit<
        ComponentProps<typeof ReactAriaModalOverlay>,
        "className"
    >;
    modalProps?: Omit<ComponentProps<typeof ReactAriaModal>, "className">;
}) {
    const [isOpen, setIsOpen] = useState(dialogTriggerProps?.isOpen);

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
                className={css({
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
                className="mobile-menu-overlay"
                {...modalOverlayProps}
            >
                <ReactAriaModal
                    className="mobile-menu-modal"
                    {...modalProps}
                >
                    <ReactAriaDialog className="mobile-menu">
                        {children}
                    </ReactAriaDialog>
                </ReactAriaModal>
            </ReactAriaModalOverlay>
        </ReactAriaDialogTrigger>
    );
}
