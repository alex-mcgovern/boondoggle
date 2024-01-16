import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

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
            closeButton
            position="top-right"
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
