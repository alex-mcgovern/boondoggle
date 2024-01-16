import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

import { css } from "../css/index.css";
import {
    toastCSS,
    toastCloseButtonCSS,
    toastDescriptionCSS,
    toastTitleCSS,
} from "./styles.css";

export const toast = sonnerToast;

export const Toaster = () => {
    return (
        <SonnerToaster
            className={css({ display: "flex", justifyContent: "center" })}
            closeButton
            position="bottom-center"
            toastOptions={{
                classNames: {
                    closeButton: toastCloseButtonCSS,
                    description: toastDescriptionCSS,
                    title: toastTitleCSS,
                    toast: toastCSS,
                },
                unstyled: true,
            }}
        />
    );
};
