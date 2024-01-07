import type { Meta, StoryObj } from "@storybook/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form } from ".";
import { Button } from "../button";
import { ComboBoxButton, FormComboBox } from "../combo-box";
import { FormComboBoxCountry } from "../combo-box-country";
import { DateInput } from "../date-input";
import { DatePickerButton, FormDatePicker } from "../date-picker";
import { Group } from "../group";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import {
    FormNumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from "../number-field";
import { FormSelect, SelectButton } from "../select";
import { sprinkles } from "../sprinkles/index.css";
import { TextArea } from "../text-area";
import { FormTextField, TextFieldVisibilityButton } from "../text-field";
import { ToastProvider } from "../toast";

const zodSchema = z.object({
    amount: z.number(),
    count: z.number(),
    country: z.string(),
    currency: z.enum(["EUR", "USD", "GBP"]),
    date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    description: z.string().min(1).max(20),
    email_address: z.string().email(),
    favourite_food: z.enum(["apple", "tomato", "carrot", "lettuce"]),
    full_name: z.string().min(1).max(30),
    password: z.string(),
});

type FieldValues = z.infer<typeof zodSchema>;

const meta = {
    args: {
        className: sprinkles({ width: "main_sm" }),
        handleSubmit: (fieldValues) => {
            alert(
                `Form submitted successfully \n ${JSON.stringify(fieldValues)}`,
            );
        },
        resolver: zodResolver(
            z.object({
                amount: z.number(),
                count: z.number(),
                country: z.string(),
                currency: z.enum(["EUR", "USD", "GBP"]),
                date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
                description: z.string().min(1).max(20),
                email_address: z.string().email(),
                favourite_food: z.enum([
                    "apple",
                    "tomato",
                    "carrot",
                    "lettuce",
                ]),
                full_name: z.string().min(1).max(30),
                password: z.string(),
            }),
        ),
    },
    component: Form,
    decorators: [
        (Story) => {
            return (
                <ToastProvider>
                    <Story />
                </ToastProvider>
            );
        },
    ],
    render: (args) => {
        return (
            <Form<FieldValues> {...args}>
                {({ currency }) => {
                    // console.debug("fieldValues", formMethods.getValues());
                    return (
                        <>
                            {/** --------------------------------------------
                             * @example Text field
                             * ----------------------------------------------- */}

                            <FormTextField
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="full_name"
                            >
                                <Label>Full name</Label>
                                <Input />
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Text field with email validation
                             * ----------------------------------------------- */}

                            <FormTextField
                                autoComplete="off"
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="email_address"
                                type="email"
                            >
                                <Label>Email address</Label>
                                <Input />
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Text field with visibility toggle
                             * ----------------------------------------------- */}

                            <FormTextField
                                autoComplete="off"
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="password"
                                type="password"
                            >
                                <Label>Password</Label>
                                <Group>
                                    <Input variant="unstyled" />
                                    <TextFieldVisibilityButton />
                                </Group>
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Date picker field
                             * ----------------------------------------------- */}

                            <FormDatePicker
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="date_of_birth"
                            >
                                <Label>Date of birth</Label>
                                <Group>
                                    <DateInput variant="unstyled" />
                                    <DatePickerButton />
                                </Group>
                            </FormDatePicker>

                            {/** --------------------------------------------
                             * @example Number field
                             * ----------------------------------------------- */}

                            <FormNumberField
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="count"
                                step={100}
                            >
                                <Label>Count</Label>
                                <Group>
                                    <Input variant="unstyled" />
                                    <NumberFieldDecrementButton />
                                    <NumberFieldIncrementButton />
                                </Group>
                            </FormNumberField>

                            {/** --------------------------------------------
                             * @example Number field with currency select
                             * ----------------------------------------------- */}

                            <div
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                            >
                                <Label htmlFor="amount">Amount</Label>
                                <div
                                    className={sprinkles({
                                        alignItems: "start",
                                        display: "flex",
                                        gap: "space_2",
                                    })}
                                >
                                    <FormNumberField
                                        className={sprinkles({ width: "100%" })}
                                        formatOptions={{
                                            currency: currency ?? "GBP",
                                            currencyDisplay: "code",
                                            style: "currency",
                                        }}
                                        id="amount"
                                        name="amount"
                                    >
                                        <Input />
                                    </FormNumberField>

                                    <FormSelect<"EUR" | "GBP" | "USD">
                                        aria-label="Currency"
                                        items={[
                                            {
                                                id: "EUR",
                                                name: "EUR",
                                                slotLeft: (
                                                    <FlagEu
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                            {
                                                id: "USD",
                                                name: "USD",
                                                slotLeft: (
                                                    <FlagUs
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                            {
                                                id: "GBP",
                                                name: "GBP",
                                                slotLeft: (
                                                    <FlagGb
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                        ]}
                                        name="currency"
                                        placement="bottom end"
                                    >
                                        <SelectButton />
                                    </FormSelect>
                                </div>
                            </div>

                            {/** --------------------------------------------
                             * @example Combobox
                             * ----------------------------------------------- */}

                            <FormComboBox<
                                "apple" | "carrot" | "lettuce" | "tomato"
                            >
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                defaultItems={[
                                    {
                                        children: [
                                            {
                                                id: "apple",
                                                name: "Apple",
                                            },
                                            {
                                                description:
                                                    "Yes, it's a fruit",
                                                id: "tomato",
                                                name: "Tomato",
                                            },
                                        ],
                                        id: "fruits",
                                        name: "Fruits",
                                    },
                                    {
                                        children: [
                                            {
                                                id: "carrot",
                                                name: "Carrot",
                                            },
                                            {
                                                id: "lettuce",
                                                name: "Lettuce",
                                            },
                                        ],
                                        id: "vegetables",
                                        name: "Vegetables",
                                    },
                                ]}
                                name="favourite_food"
                            >
                                <Label>Favourite food</Label>
                                <Group>
                                    <Input
                                        placeholder="Type a food..."
                                        variant="unstyled"
                                    />
                                    <ComboBoxButton />
                                </Group>
                            </FormComboBox>

                            {/** --------------------------------------------
                             * @example Combobox with country list
                             * ----------------------------------------------- */}

                            <FormComboBoxCountry
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="country"
                            >
                                <Label>Country</Label>
                                <Group>
                                    <Input
                                        placeholder="Type a country..."
                                        variant="unstyled"
                                    />
                                    <ComboBoxButton />
                                </Group>
                            </FormComboBoxCountry>

                            {/** --------------------------------------------
                             * @example Text area
                             * ----------------------------------------------- */}

                            <FormTextField
                                className={sprinkles({
                                    marginBottom: "space_2",
                                })}
                                name="description"
                            >
                                <Label>Description of your issue</Label>
                                <TextArea />
                            </FormTextField>

                            <Button
                                className={sprinkles({ width: "100%" })}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </>
                    );
                }}
            </Form>
        );
    },
    title: "Form",
} satisfies Meta<typeof Form<FieldValues>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
