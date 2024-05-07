import type { ReactNode } from "react";
import type { SwitchProps as ReactAriaSwitchProps } from "react-aria-components";

import { forwardRef } from "react";
import { Switch as ReactAriaSwitch } from "react-aria-components";

import "./styles.css";

/**
 * Labels a switch component.
 *
 * This is a separate component to allow for
 * the fact that a switch is not a semantic html form  element, and so can't be labelled in the same way.
 */
export function SwitchLabel(props: { children: ReactNode }) {
    return <span className="switch-label">{props.children}</span>;
}

/**
 * The indicator for a switch component. This is the actual visual toggle switch UI element.
 */
export function SwitchIndicator() {
    return <div className="switch-indicator" />;
}

export type SwitchProps = ReactAriaSwitchProps;

/**
 * A switch allows a user to turn a setting on or off. [Built with React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)
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
 * import { Switch, type SwitchProps } from "boondoggle/switch"
 * ```
 */
export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
    (props, ref) => {
        return (
            <ReactAriaSwitch
                className="switch"
                ref={ref}
                {...props}
            />
        );
    },
);
