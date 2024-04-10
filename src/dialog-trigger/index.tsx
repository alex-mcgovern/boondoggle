import type { DialogTriggerProps as RACDialogTriggerProps } from "react-aria-components";

import { DialogTrigger as RACDialogTrigger } from "react-aria-components";

export type DialogTriggerProps = RACDialogTriggerProps;

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
export function DialogTrigger(props: RACDialogTriggerProps) {
    return <RACDialogTrigger {...props} />;
}
