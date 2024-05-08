import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";

import { Form } from "..";
import { Button } from "../../button";
import { CheckboxGroup } from "../../checkbox-group";
import { Default as CheckboxGroupStory } from "../../checkbox-group/__storybook__/stories";
import { ComboBox } from "../../combo-box";
import { Default as ComboBoxStory } from "../../combo-box/__storybook__/stories";
import { ComboBoxCountry } from "../../combo-box-country";
import { Default as ComboBoxCountryStory } from "../../combo-box-country/__storybook__/stories";
import { DatePicker } from "../../date-picker";
import {
    Default as DatePickerStory,
    WithTime as DatePickerWithTimeStory,
} from "../../date-picker/__storybook__/stories";
import { FieldError } from "../../field-error";
import { variantColorOverlay } from "../../index.css";
import { Input } from "../../input";
import { Label } from "../../label";
import { NumberField } from "../../number-field";
import { IncrementDecrement as NumberFieldIncrementDecrement } from "../../number-field/__storybook__/stories";
import { TextField } from "../../text-field";
import {
    Email as TextFieldEmailStory,
    Default as TextFieldStory,
    WithTextArea as TextFieldTextAreaStory,
    Visibility as TextFieldVisibilityStory,
} from "../../text-field/__storybook__/stories";
import { Toaster } from "../../toaster";

const meta = {
    component: Form,
    decorators: [
        (Story) => {
            return (
                <>
                    <Toaster />
                    <Story />
                </>
            );
        },
    ],
    title: "Components/Form",
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TextField
                    {...TextFieldStory.args}
                    className="mb-2"
                    name="full_name"
                />
                <TextField
                    {...TextFieldEmailStory.args}
                    className="mb-2"
                    name="email_address"
                />
                <TextField
                    {...TextFieldVisibilityStory.args}
                    className="mb-2"
                    name="password"
                />
                <CheckboxGroup
                    {...CheckboxGroupStory.args}
                    className="mb-2"
                    name="fruits"
                />
                <DatePicker
                    {...DatePickerStory.args}
                    className="mb-2"
                    name="date_of_birth"
                />
                <DatePicker
                    {...DatePickerWithTimeStory.args}
                    className="mb-2"
                    name="date_time"
                />
                <NumberField
                    {...NumberFieldIncrementDecrement.args}
                    className="mb-2"
                    name="count"
                />
                <ComboBox
                    {...ComboBoxStory.args}
                    className="mb-2"
                    name="favourite_food"
                />
                <ComboBoxCountry
                    {...ComboBoxCountryStory.args}
                    className="mb-2"
                    name="country"
                />
                <TextField
                    {...TextFieldTextAreaStory.args}
                    className="mb-2"
                    name="description"
                />
                <Button
                    className={css({ width: "100%" })}
                    type="submit"
                >
                    Submit
                </Button>
            </>
        ),
        className: css({ width: "main_sm" }),
        onSubmit: (e) => {
            alert(`Form submitted successfully \n ${JSON.stringify(e)}`);
        },
    },
};

export const ConfirmAction: Story = {
    args: {
        children: (
            <>
                <TextField
                    autoComplete="off"
                    className={clsx(
                        css({ marginBottom: "space_2" }),
                        variantColorOverlay.red,
                    )}
                    name="confirm_text"
                    validate={(v) => {
                        if (v !== "confirm") {
                            return "The value entered did not match";
                        }
                        return true;
                    }}
                    validationBehavior="native"
                >
                    <Label
                        style={{
                            userSelect: "none",
                        }}
                    >
                        Type <b>&quot;confirm&quot;</b> to continue
                    </Label>
                    <Input />
                    <FieldError />
                </TextField>

                <Button
                    appearance="primary"
                    className={css({
                        width: "100%",
                    })}
                    colorOverlay="red"
                    size="sm"
                    type="submit"
                >
                    Submit
                </Button>
            </>
        ),
        onSubmit: (e) => {
            e.preventDefault(); // Prevent navigation
            alert("Submitted");
        },
    },
};
