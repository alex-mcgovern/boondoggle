import type { DateInputProps as RACDateInputProps } from "react-aria-components";

import clsx from "clsx";
import {
    DateInput as RACDateInput,
    DateSegment as RACDateSegment,
} from "react-aria-components";

import { dateInputCSS, dateSegmentCSS } from "./styles.css";

export type DateInputProps = Omit<RACDateInputProps, "children"> & {
    variant?: "default" | "unstyled";
};

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
