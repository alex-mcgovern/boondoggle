import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";

import clsx from "clsx";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import "./styles.css";

/**
 * A checkbox group allows a user to select multiple items from a list of options. [Built with React Aria CheckboxGroup](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { CheckboxGroup, type CheckboxGroupProps } from "boondoggle/checkbox-group"
 * ```
 */
export function CheckboxGroup({ className, ...props }: AriaCheckboxGroupProps) {
    return (
        <AriaCheckboxGroup
            {...props}
            className={clsx(className, "checkbox-group")}
        />
    );
}
