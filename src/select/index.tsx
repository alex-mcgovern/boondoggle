import type { ForwardedRef } from "react";
import type {
    ButtonProps as RACButtonProps,
    SelectProps as RACSelectProps,
} from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    Button as RACButton,
    Select as RACSelect,
    SelectValue as RACSelectValue,
} from "react-aria-components";

import type { IterableListBoxItem } from "../list-box";
import type { PopoverProps } from "../popover";

// import { css } from "../css/index.css";
import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

export type SelectTriggerProps = RACButtonProps & {
    /**
     * The variant of the select button.
     * - `"borderless"` - A select button with no border.
     * - `"default"` - A select button with a border.
     */
    variant?: "borderless" | "default";
};

function _SelectButton<TItemId extends string = string>(
    { variant = "default", ...props }: SelectTriggerProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <RACButton
            {...props}
            className={clsx(props.className, "select-button", variant)}
            ref={ref}
        >
            <RACSelectValue<IterableListBoxItem<TItemId>>
                className={"select-value"}
            />
            <Icon
                // className={css({
                //     fontStyle: "bodyMd",
                //     height: "space_6",
                //     marginLeft: "auto",
                //     marginRight: "space_1",
                //     width: "space_6",
                // })}
                color="text_low_contrast"
                icon={faAnglesUpDown}
            />
        </RACButton>
    );
}

/**
 * A `SelectButton` component, for use with a `Select` component. [Built with React Aria SelectButton component](https://react-spectrum.adobe.com/react-aria/Select.html#button)
 */
export const SelectButton = forwardRef(_SelectButton);

export type SelectProps<TItemId extends string = string> = RACSelectProps<
    IterableListBoxItem<TItemId>
> & {
    /**
     * The items to display in the select popover.
     */
    items: Iterable<IterableListBoxItem<TItemId>>;
    /**
     * The placement of the select popover.
     */
    placement?: PopoverProps["placement"];
};

function _Select<TItemId extends string = string>(
    { children, ...props }: SelectProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACSelect<IterableListBoxItem<TItemId>>
            {...props}
            className={clsx(props.className, "select")}
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover placement={props.placement}>
                        <ListBox<TItemId> items={props.items} />
                    </Popover>
                </>
            )}
        </RACSelect>
    );
}

/**
 * A select displays a collapsible list of options and allows a user to select one of them. [Built with React Aria Select component](https://react-spectrum.adobe.com/react-aria/Select.html)
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
 * import { Select, type SelectProps } from "boondoggle/select"
 * ```
 */
export const Select = forwardRef(_Select);
