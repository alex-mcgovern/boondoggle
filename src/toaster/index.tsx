import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

import { css } from "../css/index.css";
import {
    toastCSS,
    toastCloseButtonCSS,
    toastDescriptionCSS,
    toastTitleCSS,
} from "./styles.css";

/**
 * A function that creates a toast notification using the
 * [Sonner](https://sonner.emilkowal.ski/) library.
 *
 * @example
 * toast("This is a toast");
 * toast.error("This is an error toast");
 * toast.success("This is a success toast");
 */
export const toast = sonnerToast;

/**
 * A toaster component that uses the [Sonner](https://sonner.emilkowal.ski/) library.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 *
 * ## Usage
 *
 * Render the toaster in the root of your app.
 *
 * ```tsx
 * import { Toaster, type ToasterProps } from "boondoggle/Toaster"
 *
 * function App() {
 *     return (
 *         <div>
 *             <Toaster />
 *             <button onClick={() => toast("My first toast")}>
 *                 Give me a toast
 *             </button>
 *         </div>
 *     );
 * }
 * ```
 *
 * Then you can use the `toast` function to create toast notifications.
 *
 * ```ts
 * toast("This is a toast");
 * toast.error("This is an error toast");
 * toast.success("This is a success toast");
 * ```
 *
 */
export function Toaster() {
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
}
