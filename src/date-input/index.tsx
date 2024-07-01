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
 * import { DateInput } from "boondoggle";
 * ```
 */
export function DateInput({
    unstyled,
    ...props
}: {
    /**
     * For use within a `Group` component, will remove all styles from the input.
     */
    unstyled?: boolean;
} & Omit<AriaDateInputProps, "children">) {
    return (
        <AriaDateInput
            {...props}
            className={clsx(props.className, "date-input", { unstyled })}
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
