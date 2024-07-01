import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../../list-box";

import { ComboBox } from "../../combo-box";
import { FieldError } from "../../field-error";

/**
 * A `FormComboBox` connects a `ComboBox` to a `Form.Root` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBox<TItemId extends string = string>({
    children,
    ...props
}: AriaComboBoxProps<IterableListBoxItem<TItemId>>) {
    if (!props.name) {
        throw new Error("FormComboBox requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled, name, onBlur, onChange, ref, value = "" },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey || props.defaultSelectedKey,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <ComboBox.Root
            {...props}
            isDisabled={disabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value ?? ""}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {(rp) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(rp)
                            : children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </ComboBox.Root>
    );
}

if (import.meta.vitest) {
    const { expect, it, vi } = import.meta.vitest;
    const { render } = await import("@testing-library/react");
    const { userEvent } = await import("@testing-library/user-event");
    const { Form } = await import("../..");
    const { Button } = await import("../../button");
    const { ComboBox } = await import("../../combo-box");
    const { Label } = await import("../../label");
    const { useEffect } = await import("react");

    /**
     * A component that resets the form after a successful submission.
     * Used to test that form fields are reset after a successful submission.
     */
    // eslint-disable-next-line no-inner-declarations
    function Resetter() {
        const {
            formState: { isSubmitSuccessful },
            reset,
        } = useFormContext();

        // It is recommended in the React Hook Form documentation to use `useEffect` to
        // handle side effects like resetting the form after a successful submission.
        useEffect(() => {
            if (isSubmitSuccessful) {
                reset();
            }
        }, [isSubmitSuccessful, reset]);

        return null;
    }

    it("submits form with `Form.ComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.ComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();

        const option = getAllByRole("option")[0];
        expect(option).toBeInTheDocument();
        await user.click(option);

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "abc123" },
            expect.anything(),
        );
    });

    it("`Form.ComboBox` clears when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Resetter />
                <Form.ComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();

        const option = getAllByRole("option")[0];
        expect(option).toBeInTheDocument();
        await user.click(option);

        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "abc123" },
            expect.anything(),
        );

        expect(field).not.toHaveValue("abc123");
    });

    it("handles `defaultValues` prop passed to `Form.Root` correctly with `Form.ComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        combobox: "abc123",
                    },
                }}
            >
                <Form.ComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "abc123" },
            expect.anything(),
        );
    });

    it("handles `selectedKey` prop passed to `Form.ComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.ComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                    selectedKey="abc123"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "abc123" },
            expect.anything(),
        );
    });

    it("handles `defaultSelectedKey` prop passed to `Form.ComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.ComboBox
                    defaultSelectedKey="abc123"
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "abc123" },
            expect.anything(),
        );
    });

    it("Filters with typeahead when filtering", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.ComboBox
                    defaultItems={[
                        { id: "p0", name: "Urgent" },
                        { id: "p1", name: "High" },
                        { id: "p2", name: "Medium" },
                        { id: "p3", name: "Low" },
                    ]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        await user.click(field);
        await user.type(field, "Urgent");

        expect(getByRole("listbox")).toBeInTheDocument();

        const options = getAllByRole("option");
        expect(options.length).toBe(1);
        await user.click(options[0]);

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "p0" },
            expect.anything(),
        );
    });

    it("Clearing combobox doesn't throw", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.ComboBox
                    defaultItems={[
                        { id: "p0", name: "Urgent" },
                        { id: "p1", name: "High" },
                        { id: "p2", name: "Medium" },
                        { id: "p3", name: "Low" },
                    ]}
                    defaultSelectedKey={"p0"}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("ComboBox");
        await user.click(field);
        await user.clear(field);
        await user.type(field, "Urgent");

        expect(getByRole("listbox")).toBeInTheDocument();

        const options = getAllByRole("option");
        expect(options.length).toBe(1);
        await user.click(options[0]);

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { combobox: "p0" },
            expect.anything(),
        );
    });
}
