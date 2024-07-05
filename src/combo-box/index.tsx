import type { ComponentProps } from "react";
import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef, useContext } from "react";
import {
    ComboBox as AriaCombobox,
    ComboBoxStateContext,
} from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { Input } from "../input";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

function ComboBoxButton() {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
}

const ComboBoxInput = forwardRef<
    HTMLInputElement,
    ComponentProps<typeof Input>
>((props, ref) => {
    const state = useContext(ComboBoxStateContext);
    const { selectedItem, toggle } = state || {};
    const { value } = selectedItem || {};
    const { slotLeft } = value || {};

    return (
        <Input
            {...props}
            defaultValue={value?.name}
            icon={slotLeft ?? props.icon}
            onClick={() => {
                toggle(null, "manual");
            }}
            placeholder={selectedItem ? selectedItem.value.name : ""}
            ref={ref}
        />
    );
});

const ComboBoxRoot = forwardRef<HTMLDivElement, AriaComboBoxProps<object>>(
    ({ children, ...props }, ref) => {
        return (
            <AriaCombobox
                {...props}
                className={clsx(props.className, "combobox")}
                ref={ref}
            >
                {(rp) => (
                    <>
                        {typeof children === "function"
                            ? children(rp)
                            : children}

                        <Popover.Root>
                            <ListBox<string> />
                        </Popover.Root>
                    </>
                )}
            </AriaCombobox>
        );
    },
);

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
 * import { ComboBox, Label } from "boondoggle";
 *
 * <ComboBox.Root>
 *   <Label>Pick a fruit</Label>
 *   <Group>
 *     <ComboBox.Input placeholder="Select a fruit..." unstyled />
 *     <ComboBox.Button />
 *   </Group>
 * </ComboBox.Root>
 * ```
 */
export const ComboBox = {
    Button: ComboBoxButton,
    Input: ComboBoxInput,
    Root: ComboBoxRoot,
};

if (import.meta.vitest) {
    const { expect, it } = import.meta.vitest;
    const { render } = await import("@testing-library/react");
    const { userEvent } = await import("@testing-library/user-event");
    const { Label } = await import("../label");
    const { Group } = await import("../group");

    it("Opens when clicking on input", async () => {
        const user = userEvent.setup();

        const { getByLabelText, getByRole } = render(
            <ComboBox.Root defaultItems={[{ id: "abc123", name: "abc123" }]}>
                <Label>ComboBox</Label>
                <Group>
                    <ComboBox.Input unstyled />
                    <ComboBox.Button />
                </Group>
            </ComboBox.Root>,
        );

        const field = getByLabelText("ComboBox", { selector: "input" });
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();
    });

    it("Opens when clicking on button", async () => {
        const user = userEvent.setup();

        const { getByLabelText, getByRole } = render(
            <ComboBox.Root defaultItems={[{ id: "abc123", name: "abc123" }]}>
                <Label>ComboBox</Label>
                <Group>
                    <ComboBox.Input unstyled />
                    <ComboBox.Button />
                </Group>
            </ComboBox.Root>,
        );

        const field = getByLabelText("ComboBox", { selector: "button" });
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();
    });
}
