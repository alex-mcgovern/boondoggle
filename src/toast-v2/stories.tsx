import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, toast } from ".";
import { Button } from "../button";

const meta = {
    args: {},
    component: Toaster,
    render: () => {
        return (
            <>
                <Toaster />

                <Button
                    appearance="secondary"
                    onPress={() => {
                        toast("This is a toast");
                    }}
                >
                    Default toast
                </Button>
            </>
        );
    },
    title: "Toaster",
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
