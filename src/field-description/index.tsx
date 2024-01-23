import type { TextProps as RACTextProps } from "react-aria-components";

import clsx from "clsx";
import { Text as ReactAriaText } from "react-aria-components";

import { descriptionCSS } from "./styles.css";

export function FieldDescription(props: RACTextProps) {
    return (
        <ReactAriaText
            {...props}
            className={clsx(props.className, descriptionCSS)}
            slot="description"
        />
    );
}
