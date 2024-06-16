/** @jest-environment jsdom */

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import { Form } from ".";
import { Button } from "../button";
import { ComboBoxInput, FormComboBox } from "../combo-box";
import { Input } from "../input";
import { Label } from "../label";
import { FormNumberField } from "../number-field";
import { FormSelect, SelectButton } from "../select";
import { FormTextField } from "../text-field";

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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormTextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </FormTextField>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <Resetter />
                <FormTextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </FormTextField>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        text_field: "abc123",
                    },
                }}
            >
                <FormTextField name="text_field">
                    <Label>Text field</Label>
                    <Input />
                </FormTextField>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormTextField
                    defaultValue="abc123"
                    name="text_field"
                >
                    <Label>Text field</Label>
                    <Input />
                </FormTextField>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormTextField
                    name="text_field"
                    value="abc123"
                >
                    <Label>Text field</Label>
                    <Input />
                </FormTextField>
                <Button type="submit">Submit</Button>
            </Form>,
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

describe("FormNumberField", async () => {
    it("submits form with `FormNumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormNumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </FormNumberField>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("`FormNumberField` resets (to 0) when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <Resetter />
                <FormNumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </FormNumberField>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `defaultValues` prop passed to `Form` correctly with `FormNumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        number_field: 1234,
                    },
                }}
            >
                <FormNumberField name="number_field">
                    <Label>Number field</Label>
                    <Input />
                </FormNumberField>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `value` prop passed to `FormNumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormNumberField
                    name="number_field"
                    value={1234}
                >
                    <Label>Number field</Label>
                    <Input />
                </FormNumberField>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `defaultValue` prop passed to `FormNumberField`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormNumberField
                    defaultValue={1234}
                    name="number_field"
                >
                    <Label>Number field</Label>
                    <Input />
                </FormNumberField>
                <Button type="submit">Submit</Button>
            </Form>,
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

describe("FormSelect`", async () => {
    it("submits form with `FormSelect`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <SelectButton />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("`FormNumberField` clears when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form onSubmit={onSubmit}>
                <Resetter />
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <SelectButton />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form
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
                    <SelectButton />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormSelect
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                    selectedKey="abc123"
                >
                    <Label>Select</Label>
                    <SelectButton />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>,
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
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormSelect
                    defaultSelectedKey="abc123"
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="select"
                >
                    <Label>Select</Label>
                    <SelectButton />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>,
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
});

describe("FormComboBox", async () => {
    it("submits form with `FormComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("`FormNumberField` clears when reset after submission", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getAllByRole, getByLabelText, getByRole, getByText } = render(
            <Form onSubmit={onSubmit}>
                <Resetter />
                <FormComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `defaultValues` prop passed to `Form` correctly with `FormComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form
                onSubmit={onSubmit}
                options={{
                    defaultValues: {
                        combobox: "abc123",
                    },
                }}
            >
                <FormComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `selectedKey` prop passed to `FormComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormComboBox
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                    selectedKey="abc123"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </Form>,
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

    it("handles `defaultSelectedKey` prop passed to `FormComboBox`", async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn().mockImplementation(() => {});

        const { getByLabelText, getByText } = render(
            <Form onSubmit={onSubmit}>
                <FormComboBox
                    defaultSelectedKey="abc123"
                    items={[{ id: "abc123", name: "abc123" }]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </Form>,
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
});
