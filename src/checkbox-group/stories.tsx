import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxGroup } from ".";
import { Checkbox } from "../checkbox";
import { css } from "../css/index.css";
import { Label } from "../label";

const fieldCSS = css({
    marginBottom: "space_2",
});

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
                    className={fieldCSS}
                    value="apple"
                >
                    Apple
                </Checkbox>
                <Checkbox
                    className={fieldCSS}
                    value="orange"
                >
                    Orange
                </Checkbox>
                <Checkbox
                    className={fieldCSS}
                    value="lemon"
                >
                    Lemon
                </Checkbox>
            </>
        ),
    },
};
