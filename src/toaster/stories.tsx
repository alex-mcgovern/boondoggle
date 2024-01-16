import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, toast } from ".";
import { Box } from "../box";
import { Button } from "../button";

const meta = {
    args: {},
    component: Toaster,
    render: () => {
        return (
            <>
                <Toaster />

                <Box
                    display="grid"
                    gap="space_1"
                >
                    <Button
                        appearance="secondary"
                        onPress={() => {
                            toast("This is a toast");
                        }}
                    >
                        Default toast
                    </Button>
                    <Button
                        appearance="secondary"
                        onPress={() => {
                            toast.error("This is an error toast");
                        }}
                    >
                        Error toast
                    </Button>
                    <Button
                        appearance="secondary"
                        onPress={() => {
                            toast.success("This is a success toast");
                        }}
                    >
                        Success toast
                    </Button>
                </Box>
            </>
        );
    },
    title: "Toaster",
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
