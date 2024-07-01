import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "..";
import { Button } from "../../button";
import { ComboBox } from "../../combo-box";
import { Label } from "../../label";

const meta = {
    args: {
        onSubmit: (data: Record<string, string>) => {
            alert(JSON.stringify(data));
        },
    },
    component: Form.Root,
    title: "Form/Root",
} satisfies Meta<typeof Form.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithComboBox: Story = {
    args: {
        children: (
            <>
                <Form.ComboBox
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
                    <ComboBox.Input />
                </Form.ComboBox>
                <Button type="submit">Submit</Button>
            </>
        ),
    },
};
