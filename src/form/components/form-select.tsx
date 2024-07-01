import type { ComponentProps } from "react";

import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../../field-error";
import { Select } from "../../select";

/**
 * A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)
 */
export function FormSelect({
    children,
    ...props
}: ComponentProps<typeof Select.Root>) {
    if (!props.name) {
        throw new Error("FormSelect requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            name,
            onBlur,
            onChange,
            ref,
            value = "",
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey || props.defaultSelectedKey,
        name: props.name,
    });

    return (
        <Select.Root
            {...props}
            defaultSelectedKey={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </Select.Root>
    );
}

if (import.meta.vitest) {
    const { expect, it, vi } = import.meta.vitest;
    const { render } = await import("@testing-library/react");
    const { userEvent } = await import("@testing-library/user-event");
    const { Form } = await import("../..");
    const { Button } = await import("../../button");
    const { Select } = await import("../../select");
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

    it("submits form with `FormSelect`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <Select.Button />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Select", { selector: "button" });
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();

        const option = getAllByRole("option")[0];
        expect(option).toBeInTheDocument();
        await user.click(option);

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { select: "abc123" },
            expect.anything(),
        );
    });

    it("`FormSelect` clears when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Resetter />
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <Select.Button />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Select", { selector: "button" });
        await user.click(field);

        expect(getByRole("listbox")).toBeInTheDocument();

        const option = getAllByRole("option")[0];
        expect(option).toBeInTheDocument();
        await user.click(option);

        expect(field).toHaveTextContent("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { select: "abc123" },
            expect.anything(),
        );

        expect(field).not.toHaveTextContent("abc123");
    });

    it("handles `defaultValues` prop passed to `Form` correctly with `FormSelect`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        select: "abc123",
                    },
                }}
            >
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <Select.Button />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Select");
        expect(field).toHaveTextContent("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { select: "abc123" },
            expect.anything(),
        );
    });

    it("handles `selectedKey` prop passed to `FormSelect`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                    selectedKey="abc123"
                >
                    <Label>Select</Label>
                    <Select.Button />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Select");
        expect(field).toHaveTextContent("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { select: "abc123" },
            expect.anything(),
        );
    });

    it("handles `defaultSelectedKey` prop passed to `FormSelect`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <FormSelect
                    defaultSelectedKey="abc123"
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <Select.Button />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Select");
        expect(field).toHaveTextContent("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { select: "abc123" },
            expect.anything(),
        );
    });
}
