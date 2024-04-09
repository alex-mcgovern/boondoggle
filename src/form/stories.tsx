import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";

import { Form } from ".";
import { Button } from "../button";
import { css } from "../css/index.css";
import { FieldError } from "../field-error";
import { variantColorOverlay } from "../index.css";
import { Input } from "../input";
import { Label } from "../label";
import { TextField } from "../text-field";

const meta = {
    args: {
        children: "Form (V2)",
    },
    component: Form,
    title: "Form (V2)",
} satisfies Meta<typeof Form>;

/**
 * Here is an example of composing a form with a text field that requires a specific value to be entered before allowing submission.
 * This pattern is useful for confirming destructive actions, such as deleting a user account.
 */
export const ValidationAction: Story = {
    render: () => {
        return (
            <Form
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent navigation
                    alert("Submitted");
                }}
            >
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
            </Form>
        );
    },
};

export default meta;
type Story = StoryObj<typeof meta>;
