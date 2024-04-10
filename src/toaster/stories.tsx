import type { Meta, StoryObj } from "@storybook/react";

import { Toaster as ToasterComponent, toast } from ".";
import { Button } from "../button";

const meta = {
    component: ToasterComponent,
    title: "Components/Toaster",
} satisfies Meta<typeof ToasterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toaster: Story = {
    render: (args) => {
        return (
            <>
                <ToasterComponent {...args} />
                <div
                    style={{
                        display: "grid",
                        gap: 8,
                        gridTemplateColumns: "repeat(3, 1fr)",
                    }}
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
                </div>
            </>
        );
    },
};
