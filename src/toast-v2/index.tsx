import clsx from "clsx";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

import { css } from "../css/index.css";
import { a11yFocus } from "../index.css";
import { toastCloseButtonCSS } from "./styles.css";

export const toast = sonnerToast;

export const Toaster = () => {
    return (
        <SonnerToaster
            toastOptions={{
                classNames: {
                    actionButton: "bg-zinc-400",
                    cancelButton: "bg-orange-400",
                    closeButton: toastCloseButtonCSS,
                    description: css({
                        color: "toast_text",
                        fontStyle: "bodyMd",
                    }),
                    title: css({
                        color: "toast_text",
                        fontStyle: "bodyMd",
                        fontWeight: "semibold",
                    }),
                    toast: clsx(
                        a11yFocus,
                        css({
                            alignItems: "center",
                            background: "bg_toast",
                            borderRadius: "md",

                            boxShadow: "lg",
                            color: "white",

                            display: "flex",
                            gap: "space_4",
                            paddingLeft: "space_4",

                            paddingRight: "space_2",

                            paddingY: "space_2",
                        }),
                    ),
                },
                unstyled: true,
            }}
        />
    );
};
