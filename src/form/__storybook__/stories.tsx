import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "..";
import { Button } from "../../button";
import { ComboBoxInput, FormComboBox } from "../../combo-box";
import { Label } from "../../label";

const meta = {
    args: {
        onSubmit: (data: Record<string, string>) => {
            alert(JSON.stringify(data));
        },
    },
    component: Form,
    title: "Components/Form",
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithComboBox: Story = {
    args: {
        children: (
            <>
                <FormComboBox
                    className="mb-4"
                    items={[
                        { id: "p0", name: "Urgent" },
                        { id: "p1", name: "High" },
                        { id: "p2", name: "Medium" },
                        { id: "p3", name: "Low" },
                    ]}
                    name="combobox"
                >
                    <Label>ComboBox</Label>
                    <ComboBoxInput />
                </FormComboBox>
                <Button type="submit">Submit</Button>
            </>
        ),
    },
};
