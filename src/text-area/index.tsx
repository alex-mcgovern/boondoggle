import type { ForwardedRef } from "react";
import type { TextAreaProps as AriaTextAreaProps } from "react-aria-components";

import clsx from "clsx";
import { TextArea as AriaTextArea } from "react-aria-components";

import "./styles.css";

/**
 * A `TextArea` component, for use with a `TextField` component. [Built with React Aria TextArea component](https://react-spectrum.adobe.com/react-aria/TextField.html#textarea)
 */
export function TextArea({
    ref,
    resize = "vertical",
    ...props
}: AriaTextAreaProps & {
    ref?: ForwardedRef<HTMLTextAreaElement>;
    resize?: "block" | "both" | "horizontal" | "inline" | "none" | "vertical";
}) {
    return (
        <AriaTextArea
            {...props}
            className={clsx(props.className, "text-area")}
            ref={ref}
            style={{ resize }}
        />
    );
}
