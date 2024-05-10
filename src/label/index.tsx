import type { LabelProps as AriaLabelProps } from "react-aria-components";

import clsx from "clsx";
import { Label as AriaLabel } from "react-aria-components";

import "./styles.css";

/**
 * A `Label` component, for use with a `TextField` component. [Built with React Aria Label component](https://react-spectrum.adobe.com/react-aria/TextField.html#label)
 */
export function Label(props: AriaLabelProps) {
    return (
        <AriaLabel
            {...props}
            className={clsx(props.className, "label")}
        />
    );
}
