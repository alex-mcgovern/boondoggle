import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { Dialog } from "..";
import { Button } from "../../button";

const meta = {
    args: {
        children: (
            <>
                <Button>Open dialog</Button>
                <Dialog.ModalOverlay>
                    <Dialog.Modal>
                        <Dialog.Root>
                            <Dialog.Header>
                                <Dialog.Title>Hello there</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Content>
                                <>
                                    <p>
                                        A modal dialog component powered by{" "}
                                        <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
                                            React Aria Components
                                        </a>
                                    </p>
                                    {Array.from({ length: 10 }, () => {
                                        return (
                                            <p
                                                key={faker.string.alphanumeric(
                                                    4,
                                                )}
                                            >
                                                {faker.lorem.paragraphs(1)}
                                            </p>
                                        );
                                    })}
                                </>
                            </Dialog.Content>
                            <Dialog.Footer>
                                <Button
                                    onPress={() => {
                                        alert("Confirmed");
                                        close();
                                    }}
                                    type="submit"
                                >
                                    Confirm
                                </Button>
                            </Dialog.Footer>
                        </Dialog.Root>
                    </Dialog.Modal>
                </Dialog.ModalOverlay>
            </>
        ),
    },
    component: Dialog.Trigger,
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        alignItems: "center",
                        backgroundImage:
                            "linear-gradient(to right, var(--slate-5) 1px, transparent 1px), linear-gradient(to bottom, var(--slate-5) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        display: "flex",
                        height: "100dvh",
                        justifyContent: "center",
                        width: "100dvw",
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    title: "Dialog",
} satisfies Meta<typeof Dialog.Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
