import type { ComponentProps, ReactNode } from "react";

import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { useState } from "react";
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

function Root({
    children,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
}: {
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
}) {
    const [isOpen, setIsOpen] = useState(dialogTriggerProps?.isOpen);

    return (
        <AriaDialogTrigger
            {...dialogTriggerProps}
            isOpen={isOpen}
            onOpenChange={(isOpen) => {
                setIsOpen(isOpen);
                dialogTriggerProps?.onOpenChange?.(isOpen);
            }}
        >
            <Button
                appearance="ghost"
                square
            >
                <Icon icon={isOpen ? faTimes : faBars} />
            </Button>
            <AriaModalOverlay
                className="mobile-menu-overlay"
                {...modalOverlayProps}
            >
                <AriaModal
                    className="mobile-menu-modal"
                    {...modalProps}
                >
                    <AriaDialog className="mobile-menu">{children}</AriaDialog>
                </AriaModal>
            </AriaModalOverlay>
        </AriaDialogTrigger>
    );
}

function Header({
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
                <AriaHeading
                    className="mobile-menu-title"
                    slot="title"
                >
                    {title}
                </AriaHeading>
            ) : null}

            <Button
                appearance="ghost"
                aria-label="Close"
                className="ml-auto"
                name="close"
                onPress={close}
                square
                type="button"
            >
                <Icon icon={faTimes} />
            </Button>
        </header>
    );
}

function Content({ children }: { children: ReactNode }) {
    return <div className="mobile-menu-content">{children}</div>;
}

function Footer({ children }: { children: ReactNode }) {
    return <footer className="mobile-menu-footer">{children}</footer>;
}

/**
 * A pre-composed mobile menu component.
 */
export const MobileMenu = {
    Content: Content,
    Footer: Footer,
    Header: Header,
    Root: Root,
};
