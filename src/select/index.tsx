import type { ComponentProps, ForwardedRef, ReactNode } from "react";
import type {
    ButtonProps as AriaButtonProps,
    SelectProps as AriaSelectProps,
} from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef, useContext } from "react";
import {
    Button as AriaButton,
    Select as AriaSelect,
    SelectValue as AriaSelectValue,
    SelectStateContext,
} from "react-aria-components";

import type { IterableListBoxItem } from "../list-box";

import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

function SelectButton<TItemId extends string = string>({
    variant = "default",
    ...props
}: {
    /**
     * React ref to the SelectButton element.
     */
    ref?: ForwardedRef<HTMLButtonElement>;

    /**
     * The variant of the select button.
     * - `"borderless"` - A select button with no border.
     * - `"default"` - A select button with a border.
     */
    variant?: "borderless" | "default";
} & AriaButtonProps) {
    const state = useContext(SelectStateContext);
    const { selectedItem } = state || {};
    const { value } = selectedItem || {};
    const { slotLeft } = (value as { slotLeft?: ReactNode }) || {};

    return (
        <AriaButton
            {...props}
            className={clsx(props.className, "select-button", variant)}
        >
            <AriaSelectValue<IterableListBoxItem<TItemId>>
                className={"select-value"}
            >
                {(rp) => {
                    return (
                        <>
                            {slotLeft ? (
                                <div className="icon">{slotLeft}</div>
                            ) : null}

                            {rp.selectedText}
                        </>
                    );
                }}
            </AriaSelectValue>
            <Icon
                className="select-icon"
                icon={faAnglesUpDown}
            />
        </AriaButton>
    );
}

const SelectRoot = forwardRef<
    HTMLDivElement,
    {
        /**
         * The items to display in the select popover.
         */
        items: Iterable<IterableListBoxItem<string>>;
        /**
         * The placement of the select popover.
         */
        placement?: ComponentProps<typeof Popover.Root>["placement"];
        /**
         * React ref to the Select element.
         */
        ref?: ForwardedRef<HTMLDivElement>;
    } & AriaSelectProps<IterableListBoxItem<string>>
>(({ children, ...props }, ref) => {
    return (
        <AriaSelect<IterableListBoxItem<string>>
            {...props}
            className={clsx(props.className, "select")}
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover.Root placement={props.placement}>
                        <ListBox<string> items={props.items} />
                    </Popover.Root>
                </>
            )}
        </AriaSelect>
    );
});

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
 * ```tsx
 * import { Select, Label } from "boondoggle";
 *
 * <Select.Root>
 *  <Label>Choose a color</Label>
 *  <Select.Button />
 * </Select.Root>
 * ```
 */
export const Select = {
    Button: SelectButton,
    Root: SelectRoot,
};
