import type { DateInputProps as AriaDateInputProps } from "react-aria-components";

import clsx from "clsx";
import {
    DateInput as AriaDateInput,
    DateSegment as AriaDateSegment,
} from "react-aria-components";

import "./styles.css";

/**
 * The <DateInput> component renders a group of date segments. It accepts a function as its children, which is called to render a <DateSegment> for each segment.
 * [Built with React Aria DateInput](https://react-spectrum.adobe.com/react-aria/DateField.html#dateinput)
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
 * import { DateInput, type DateInputProps } from "boondoggle/date-input"
 * ```
 */
export function DateInput({
    variant = "default",
    ...props
}: Omit<AriaDateInputProps, "children"> & {
    /**
     * The variant of the input.
     * - `default` is the default input style.
     * - `unstyled` is for use within a `Group` component, and will remove all styles from the input.
     */
    variant?: "default" | "unstyled";
}) {
    return (
        <AriaDateInput
            {...props}
            className={clsx("date-input", variant, props.className)}
        >
            {(segment) => (
                <AriaDateSegment
                    className="date-segment"
                    segment={segment}
                />
            )}
        </AriaDateInput>
    );
}
