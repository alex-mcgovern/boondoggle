import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from ".";
import { Label } from "../label";

const meta = {
    args: {},
    component: Radio.Group,
    title: "Radio",
} satisfies Meta<typeof Radio.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Favorite pet</Label>
                <Radio.RadioItem value="dogs">Dog</Radio.RadioItem>
                <Radio.RadioItem value="cats">Cat</Radio.RadioItem>
                <Radio.RadioItem value="dragon">Dragon</Radio.RadioItem>
            </>
        ),
    },
};
