import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "..";
import { Button } from "../../button";
import { Input } from "../../input";
import { Pill } from "../../pill";

const meta = {
    args: {
        brandColor: "#00bbbe",
        children: (
            <>
                <Button>Button</Button>
                <Input />
                <Pill>Pill</Pill>
            </>
        ),
    },
    component: ThemeProvider,
    title: "ThemeProvider",
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
