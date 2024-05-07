import type { ForwardedRef } from "react";
import type { ComboBoxProps as RACComboBoxProps } from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import { ComboBox as RACCombobox } from "react-aria-components";

import type { IterableListBoxItem } from "../list-box";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

/**
 * Button for triggering the ComboBox.
 */
export function ComboBoxButton() {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
}

export type ComboBoxProps<TItemId extends string = string> = RACComboBoxProps<
    IterableListBoxItem<TItemId>
>;

function _ComboBox<TItemId extends string = string>(
    { children, ...props }: ComboBoxProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACCombobox
            {...props}
            className={clsx(props.className, "combobox")}
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover>
                        <ListBox<TItemId> />
                    </Popover>
                </>
            )}
        </RACCombobox>
    );
}

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```tsx
 * import { ComboBox, ComboBoxButton } from "boondoggle/combobox";
 * ```
 */
export const ComboBox = forwardRef(_ComboBox);
