import type { DateInputProps as RACDateInputProps } from "react-aria-components";

import clsx from "clsx";
import {
    DateInput as RACDateInput,
    DateSegment as RACDateSegment,
} from "react-aria-components";

import { dateInputCSS, dateSegmentCSS } from "./styles.css";

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
export function DateInput(props: DateInputProps) {
    return (
        <RACDateInput
            {...props}
            className={(p) =>
                clsx(
                    props.className,
                    dateInputCSS({ ...p, variant: props.variant }),
                )
            }
        >
            {(segment) => (
                <RACDateSegment
                    className={({
                        isFocused,
                        isFocusVisible,
                        isHovered,
                        isInvalid,
                        isPlaceholder,
                        isReadOnly,
                        type,
                    }) =>
                        dateSegmentCSS({
                            isFocused,
                            isFocusVisible,
                            isHovered,
                            isInvalid,
                            isPlaceholder,
                            isReadOnly,
                            type,
                        })
                    }
                    segment={segment}
                />
            )}
        </RACDateInput>
    );
}
