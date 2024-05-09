import type { TextAreaProps as RACTextAreaProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { TextArea as RACTextArea } from "react-aria-components";

import "./styles.css";

/**
 * A `TextArea` component, for use with a `TextField` component. [Built with React Aria TextArea component](https://react-spectrum.adobe.com/react-aria/TextField.html#textarea)
 */
export const TextArea = forwardRef<
    HTMLTextAreaElement,
    RACTextAreaProps & {
        resize?:
            | "block"
            | "both"
            | "horizontal"
            | "inline"
            | "none"
            | "vertical";
    }
>(({ resize = "vertical", ...props }, ref) => {
    return (
        <RACTextArea
            {...props}
            className={clsx(props.className, "text-area")}
            ref={ref}
            style={{ resize }}
        />
    );
});
