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
import { comboBoxCSS } from "./styles.css";

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
            className={(renderProps) =>
                clsx(props.className, comboBoxCSS(renderProps))
            }
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

export const ComboBox = forwardRef(_ComboBox);
