import type { CheckboxProps as RACCheckboxProps } from "react-aria-components";

import clsx from "clsx";
import { Checkbox as RACCheckbox } from "react-aria-components";

import "./styles.css";

export type CheckboxProps = RACCheckboxProps;

/**
 * A checkbox group allows a user to select multiple items from a list of options. [Built with React Aria Checkbox](https://react-spectrum.adobe.com/react-aria/Checkbox.html)
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
 * import { Checkbox, type CheckboxProps } from "boondoggle/checkbox"
 * ```
 */
export function Checkbox(props: CheckboxProps) {
    return (
        <RACCheckbox
            {...props}
            className={clsx(props.className, "checkbox-wrapper")}
        >
            {(renderProps) => {
                return (
                    <>
                        <div className="checkbox">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 18 18"
                            >
                                {props.isIndeterminate ? (
                                    <rect
                                        height={3}
                                        width={15}
                                        x={1}
                                        y={7.5}
                                    />
                                ) : (
                                    <polyline points="1 9 7 14 15 4" />
                                )}
                            </svg>
                        </div>
                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}
                    </>
                );
            }}
        </RACCheckbox>
    );
}
