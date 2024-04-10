import type { LabelProps as RACLabelProps } from "react-aria-components";

import clsx from "clsx";
import { Label as RACLabel } from "react-aria-components";

import { labelCSS } from "./styles.css";

/**
 * A `Label` component, for use with a `TextField` component. [Built with React Aria Label component](https://react-spectrum.adobe.com/react-aria/TextField.html#label)
 */
export function Label(props: RACLabelProps) {
    return (
        <RACLabel
            {...props}
            className={clsx(props.className, labelCSS)}
        />
    );
}
