import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxGroup } from "..";
import { Checkbox } from "../../checkbox";
import { Label } from "../../label";

const meta = {
    component: CheckboxGroup,
    title: "Components/CheckboxGroup",
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Fruits</Label>
                <Checkbox
                    className="mb-2"
                    value="apple"
                >
                    Apple
                </Checkbox>
                <Checkbox
                    className="mb-2"
                    value="orange"
                >
                    Orange
                </Checkbox>
                <Checkbox
                    className="mb-2"
                    value="lemon"
                >
                    Lemon
                </Checkbox>
            </>
        ),
    },
};
