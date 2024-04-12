import type { DateInputProps as RACDateInputProps } from "react-aria-components";

import clsx from "clsx";
import {
    DateInput as RACDateInput,
    DateSegment as RACDateSegment,
} from "react-aria-components";

import "./styles.css";

export type DateInputProps = Omit<RACDateInputProps, "children"> & {
    /**
     * The variant of the input.
     * - `default` is the default input style.
     * - `unstyled` is for use within a `Group` component, and will remove all styles from the input.
     */
    variant?: "default" | "unstyled";
};

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
export function DateInput({ variant = "default", ...props }: DateInputProps) {
    return (
        <RACDateInput
            {...props}
            className={clsx("date-input", variant, props.className)}
        >
            {(segment) => (
                <RACDateSegment
                    className="date-segment"
                    segment={segment}
                />
            )}
        </RACDateInput>
    );
}
