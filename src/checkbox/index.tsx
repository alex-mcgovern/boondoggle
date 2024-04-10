import type { CheckboxProps as RACCheckboxProps } from "react-aria-components";

import clsx from "clsx";
import { Checkbox as RACCheckbox } from "react-aria-components";

import { checkboxCSS, checkboxTickCSS, checkboxWrapperCSS } from "./styles.css";

function CheckboxTick({ isSelected }: { isSelected: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className={checkboxTickCSS({ isSelected })}
            viewBox="0 0 18 18"
        >
            <polyline points="1 9 7 14 15 4" />
        </svg>
    );
}

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
            className={(renderProps) =>
                clsx(props.className, checkboxWrapperCSS(renderProps))
            }
        >
            {(renderProps) => {
                return (
                    <>
                        <div className={checkboxCSS(renderProps)}>
                            <CheckboxTick isSelected={renderProps.isSelected} />
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
