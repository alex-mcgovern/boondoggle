import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import { Form } from ".";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

/**
 * A component that resets the form after a successful submission.
 * Used to test that form fields are reset after a successful submission.
 */
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

describe("FormTextField", async () => {
    it("submits form with `FormTextField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.TextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </Form.TextField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Text field");
        await user.type(field, "abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { text_field: "abc123" },
            expect.anything(),
        );
    });

    it("`FormTextField` clears when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Resetter />
                <Form.TextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </Form.TextField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Text field");
        await user.type(field, "abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { text_field: "abc123" },
            expect.anything(),
        );

        expect(field).toHaveValue("");
    });

    it("handles `defaultValues` prop passed to `Form` correctly with `FormTextField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        text_field: "abc123",
                    },
                }}
            >
                <Form.TextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </Form.TextField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Text field");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { text_field: "abc123" },
            expect.anything(),
        );
    });

    it("handles `defaultValue` prop passed to `FormTextField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.TextField
                    defaultValue="abc123"
                    name="text_field"
                >
                    <Label>Text field</Label>
                    <Input />
                </Form.TextField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Text field");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { text_field: "abc123" },
            expect.anything(),
        );
    });

    it("handles `value` prop passed to `FormTextField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.TextField
                    name="text_field"
                    value="abc123"
                >
                    <Label>Text field</Label>
                    <Input />
                </Form.TextField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Text field");
        expect(field).toHaveValue("abc123");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { text_field: "abc123" },
            expect.anything(),
        );
    });
});

describe("Form.NumberField", async () => {
    it("submits form with `Form.NumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.NumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </Form.NumberField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Number field");
        await user.type(field, "1234");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { number_field: 1234 },
            expect.anything(),
        );
    });

    it("`Form.NumberField` resets (to 0) when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Resetter />
                <Form.NumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </Form.NumberField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Number field");
        await user.type(field, "1234");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { number_field: 1234 },
            expect.anything(),
        );

        expect(field).toHaveValue("0");
    });

    it("handles `defaultValues` prop passed to `Form` correctly with `Form.NumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        number_field: 1234,
                    },
                }}
            >
                <Form.NumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </Form.NumberField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Number field");
        expect(field).toHaveValue("1,234");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { number_field: 1234 },
            expect.anything(),
        );
    });

    it("handles `value` prop passed to `Form.NumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.NumberField
                    name="number_field"
                    value={1234}
                >
                    <Label>Number field</Label>
                    <Input />
                </Form.NumberField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Number field");
        expect(field).toHaveValue("1,234");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { number_field: 1234 },
            expect.anything(),
        );
    });

    it("handles `defaultValue` prop passed to `Form.NumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => null);

        const { getByLabelText, getByText } = render(
            <Form.Root onSubmit={onSubmit}>
                <Form.NumberField
                    defaultValue={1234}
                    name="number_field"
                >
                    <Label>Number field</Label>
                    <Input />
                </Form.NumberField>
                <Button type="submit">Submit</Button>
            </Form.Root>,
        );

        const field = getByLabelText("Number field");
        expect(field).toHaveValue("1,234");

        const button = getByText("Submit");
        await user.click(button);

        expect(onSubmit).toHaveBeenCalledWith(
            { number_field: 1234 },
            expect.anything(),
        );
    });
});
