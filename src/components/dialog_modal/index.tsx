import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { useDialogModalState } from "../../lib/use_dialog_modal_state";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";
import { DialogModalActions } from "../dialog_modal_actions";
import { DialogModalContent } from "../dialog_modal_content";
import { DialogModalErrorMessage } from "../dialog_modal_error_message";
import { DialogModalHeader } from "../dialog_modal_header";
import { DialogModalInner } from "../dialog_modal_inner";
import { DialogModalOuter } from "../dialog_modal_outer";
import { LoaderFullScreen } from "../loader_full_screen";

import type { BoxProps } from "../box";
import type { DialogModalActionsProps } from "../dialog_modal_actions";
import type { DialogModalInnerWidth } from "../dialog_modal_inner/styles.css";
import type { ReactNode } from "react";

export type DialogModalProps = {
    /**
     * Actions shown at the bottom of the dialog modal.
     */
    actions?: DialogModalActionsProps["actions"];

    /**
     * Alert shown at the top of the dialog modal.
     */
    alert?: ReactNode;

    /**
     * Content shown in the dialog modal.
     */
    children: ReactNode | Array<ReactNode>;

    /**
     * Whether the dialog modal is in an error state.
     */
    isError?: boolean;

    /**
     * Whether the dialog modal is loading.
     */
    isLoading?: boolean;

    /**
     * Function to call when the "Try again" button is clicked.
     */
    onClickTryAgain?: (() => unknown) | (() => Promise<unknown>) | undefined;

    /**
     * Whether the dialog modal should close when an action is clicked.
     */
    shouldCloseOnAction?: boolean;

    /**
     * Description of the error.
     */
    strErrorDescription?: string;

    /**
     * Title of the error.
     */
    strErrorTitle?: string;

    /**
     * Text for the "Try again" button.
     */
    strTryAgain?: string | undefined;

    /**
     * Title shown at the top of the dialog modal.
     */
    title: string;

    /**
     * Trigger node shown to open the dialog modal.
     */
    triggerNode?: ReactNode;

    /**
     * Width of the dialog modal.
     */
    width: DialogModalInnerWidth;

    /**
     * Props to pass to the wrapper.
     */
    wrapperProps?: BoxProps;
};

export const DialogModal = forwardRef<HTMLDialogElement, DialogModalProps>(
    (
        {
            actions,
            alert,
            children,
            isError,
            isLoading,
            onClickTryAgain,
            shouldCloseOnAction,
            strErrorDescription,
            strErrorTitle,
            strTryAgain,
            title,
            triggerNode,
            width,
            wrapperProps,
        },
        ref
    ) => {
        const { closeDialog, dialogRef, toggleIsOpen, triggerRef } = useDialogModalState({ ref });

        return (
            <Box
                className={variantColorOverlay.default}
                position="relative"
                {...wrapperProps}
            >
                {triggerNode && (
                    <Slot
                        onClick={toggleIsOpen}
                        ref={triggerRef}
                    >
                        {triggerNode}
                    </Slot>
                )}

                <DialogModalOuter dialogRef={dialogRef}>
                    <DialogModalInner width={width}>
                        <DialogModalHeader
                            closeDialog={closeDialog}
                            title={title}
                        />

                        {!isLoading && isError && strErrorDescription && strErrorTitle && (
                            <DialogModalErrorMessage
                                description={strErrorDescription}
                                title={strErrorTitle}
                            />
                        )}

                        {!isError && isLoading && <LoaderFullScreen />}

                        {!isError && !isLoading && (
                            <DialogModalContent alert={alert}>{children}</DialogModalContent>
                        )}
                        {actions && (
                            <DialogModalActions
                                actions={actions}
                                closeDialog={closeDialog}
                                isError={isError}
                                isLoading={isLoading}
                                onClickTryAgain={onClickTryAgain}
                                shouldCloseOnAction={shouldCloseOnAction}
                                strTryAgain={strTryAgain}
                            />
                        )}
                    </DialogModalInner>
                </DialogModalOuter>
            </Box>
        );
    }
);
