import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from ".";
import { Label } from "../label";

const meta = {
    args: {},
    component: Radio.Group,
    title: "Components/Radio",
} satisfies Meta<typeof Radio.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Favorite pet</Label>
                <Radio.Item value="dogs">Dog</Radio.Item>
                <Radio.Item value="cats">Cat</Radio.Item>
                <Radio.Item value="dragon">Dragon</Radio.Item>
            </>
        ),
    },
};
