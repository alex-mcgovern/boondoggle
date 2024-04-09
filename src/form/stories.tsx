import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";

import { Form } from ".";
import { Button } from "../button";
import { CheckboxGroup } from "../checkbox-group";
import { Default as CheckboxGroupStory } from "../checkbox-group/stories";
import { ComboBox } from "../combo-box";
import { Default as ComboBoxStory } from "../combo-box/stories";
import { ComboBoxCountry } from "../combo-box-country";
import { Default as ComboBoxCountryStory } from "../combo-box-country/stories";
import { css } from "../css/index.css";
import { DatePicker } from "../date-picker";
import {
    Default as DatePickerStory,
    WithTime as DatePickerWithTimeStory,
} from "../date-picker/stories";
import { FieldError } from "../field-error";
import { variantColorOverlay } from "../index.css";
import { Input } from "../input";
import { Label } from "../label";
import { NumberField } from "../number-field";
import { IncrementDecrement as NumberFieldIncrementDecrement } from "../number-field/stories";
import { TextField } from "../text-field";
import {
    Email as TextFieldEmailStory,
    Default as TextFieldStory,
    WithTextArea as TextFieldTextAreaStory,
    Visibility as TextFieldVisibilityStory,
} from "../text-field/stories";
import { Toaster } from "../toaster";

const fieldCSS = css({
    marginBottom: "space_2",
});

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
                    className={fieldCSS}
                    name="full_name"
                />
                <TextField
                    {...TextFieldEmailStory.args}
                    className={fieldCSS}
                    name="email_address"
                />
                <TextField
                    {...TextFieldVisibilityStory.args}
                    className={fieldCSS}
                    name="password"
                />
                <CheckboxGroup
                    {...CheckboxGroupStory.args}
                    className={fieldCSS}
                    name="fruits"
                />
                <DatePicker
                    {...DatePickerStory.args}
                    className={fieldCSS}
                    name="date_of_birth"
                />
                <DatePicker
                    {...DatePickerWithTimeStory.args}
                    className={fieldCSS}
                    name="date_time"
                />
                <NumberField
                    {...NumberFieldIncrementDecrement.args}
                    className={fieldCSS}
                    name="count"
                />
                <ComboBox
                    {...ComboBoxStory.args}
                    className={fieldCSS}
                    name="favourite_food"
                />
                <ComboBoxCountry
                    {...ComboBoxCountryStory.args}
                    className={fieldCSS}
                    name="country"
                />
                <TextField
                    {...TextFieldTextAreaStory.args}
                    className={fieldCSS}
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
