import type { DialogTriggerProps as AriaDialogTriggerProps } from "react-aria-components";

import { DialogTrigger as AriaDialogTrigger } from "react-aria-components";

/**
 * A DialogTrigger can be used to open a dialog overlay in response to a user action, e.g. clicking a button. [Built with React Aria Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html)
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { DialogTrigger, type DialogTriggerProps } from "boondoggle/dialog-trigger"
 * ```
 */
export function DialogTrigger(props: AriaDialogTriggerProps) {
    return <AriaDialogTrigger {...props} />;
}
