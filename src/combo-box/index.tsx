import type { CSSProperties, ComponentProps, RefObject } from "react";
import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import {
    createContext,
    forwardRef,
    useContext,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import {
    ComboBox as AriaCombobox,
    ComboBoxStateContext,
} from "react-aria-components";

import { FieldButton } from "../field-button";
import { Group } from "../group";
import { Icon } from "../icon";
import { Input } from "../input";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

const ComboBoxRefContext = createContext<RefObject<HTMLDivElement> | null>(
    null,
);

function ComboBoxButton() {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
}

function ComboBoxGroup(props: ComponentProps<typeof Group>) {
    const ref = useContext(ComboBoxRefContext);

    return (
        <Group
            {...props}
            ref={ref}
        />
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
            defaultValue={value?.name || props.defaultValue}
            icon={slotLeft ?? props.icon}
            onClick={(e) => {
                toggle(null, "manual");
                props.onClick?.(e);
            }}
            placeholder={selectedItem?.value.name || props.placeholder || ""}
            ref={ref}
        />
    );
});

const ComboBoxRoot = forwardRef<HTMLDivElement, AriaComboBoxProps<object>>(
    ({ children, ...props }, ref) => {
        const groupRef = useRef<HTMLDivElement>(null);
        const [groupWidth, setGroupWidth] = useState<null | number>(null);

        useLayoutEffect(() => {
            const targetElement = groupRef.current;
            if (!targetElement) return;

            const updateWidth = () => {
                setGroupWidth(targetElement.offsetWidth);
            };

            updateWidth();

            const observer = new MutationObserver(() => {
                updateWidth();
            });

            observer.observe(targetElement, {
                childList: true,
                subtree: true,
            });

            return () => observer.disconnect();
        }, []);

        return (
            <ComboBoxRefContext.Provider value={groupRef}>
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

                            <Popover.Root
                                style={
                                    {
                                        "--trigger-width": `${groupWidth}px`,
                                    } as CSSProperties
                                }
                            >
                                <ListBox<string> />
                            </Popover.Root>
                        </>
                    )}
                </AriaCombobox>
            </ComboBoxRefContext.Provider>
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
    Group: ComboBoxGroup,
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
