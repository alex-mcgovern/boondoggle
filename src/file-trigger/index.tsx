import type { FileTriggerProps as AriaFileTriggerProps } from "react-aria-components";

import { FileTrigger as AriaFileTrigger } from "react-aria-components";

/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export function FileTrigger(props: AriaFileTriggerProps) {
    return (
        <AriaFileTrigger
        // onSelect={(e) => {
        //     // const files = Array.from(e);
        //     // const filenames = files.map((file) => file.name);
        // }}
        >
            {props.children}
        </AriaFileTrigger>
    );
}
