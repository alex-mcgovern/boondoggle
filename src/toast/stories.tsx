import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { ToastProvider, useToastContext } from ".";
import { Button } from "../button";

const meta = {
    args: {},
    component: ToastProvider,
    decorators: [
        (Story) => (
            <ToastProvider>
                <Story />
            </ToastProvider>
        ),
    ],
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const state = useToastContext();

        return (
            <>
                <Button
                    appearance="secondary"
                    onPress={() => {
                        state.add(
                            {
                                description: faker.lorem.sentence(7),
                                level: faker.helpers.arrayElement([
                                    "info",
                                    "success",
                                    "warning",
                                    "error",
                                ]),
                                title: faker.lorem.sentence(3),
                            },
                            { timeout: 5000 },
                        );
                    }}
                >
                    Show toast
                </Button>
            </>
        );
    },
    title: "ToastProvider",
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
