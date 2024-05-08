import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import {
    DialogFooter,
    DialogHeader,
    ScrollableDialogContent,
    DialogOld as StoryComp,
} from "..";
import { Button } from "../../button";
import { css } from "../../css/index.css";
import { DialogAlert } from "../../dialog-alert";
import { DialogErrorMessage } from "../../dialog-error-message";
import { Form } from "../../form";
import { Label } from "../../label";
import { TextArea } from "../../text-area";
import { TextField } from "../../text-field";

const meta = {
    args: {
        buttonProps: {
            children: "Open Dialog",
        },
        children: ({ close }) => (
            <>
                <DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <ScrollableDialogContent>
                    <>
                        <p>
                            A modal dialog component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
                                React Aria Components
                            </a>
                        </p>
                        {Array.from({ length: 10 }, () => {
                            return (
                                <p key={faker.string.alphanumeric(4)}>
                                    {faker.lorem.paragraphs(1)}
                                </p>
                            );
                        })}
                    </>
                </ScrollableDialogContent>
                <DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                        type="submit"
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </>
        ),
        modalOverlayProps: {
            isDismissable: true,
        },
    },
    component: StoryComp,
    title: "Components/Dialog",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WidthSm: Story = {
    args: {
        width: "sm",
    },
};

export const WidthLg: Story = {
    args: {
        width: "lg",
    },
};

export const WithForm: Story = {
    args: {
        children: ({ close }) => {
            return (
                <Form
                    className={css({
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    })}
                    onSubmit={(e) => alert(JSON.stringify(e))}
                >
                    <DialogHeader
                        close={close}
                        title="Form"
                    />

                    <ScrollableDialogContent>
                        <TextField
                            className={css({
                                marginBottom: "space_4",
                            })}
                            name="reason"
                        >
                            <Label>Description</Label>
                            <TextArea />
                        </TextField>
                    </ScrollableDialogContent>

                    <DialogFooter>
                        <Button
                            appearance="primary"
                            className={css({ width: "100%" })}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </DialogFooter>
                </Form>
            );
        },
    },
};

export const WithDialogErrorMessage: Story = {
    args: {
        children: ({ close }) => (
            <>
                <DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <DialogErrorMessage
                    error={{ message: "This is an error message" }}
                    onPressCancel={close}
                    onPressTryAgain={close}
                    strCancel="Cancel"
                    strTryAgain="Try Again"
                />
            </>
        ),
        colorOverlay: "red",
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};

export const WithDialogAlert: Story = {
    args: {
        children: ({ close }) => (
            <>
                <DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <DialogAlert
                    colorOverlay="red"
                    description="This is a description for the alert"
                    title="This is an alert"
                />
                <ScrollableDialogContent>
                    <>
                        <p>
                            A modal dialog component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
                                React Aria Components
                            </a>
                        </p>
                        {Array.from({ length: 10 }, () => {
                            return (
                                <p key={faker.string.alphanumeric(4)}>
                                    {faker.lorem.paragraphs(1)}
                                </p>
                            );
                        })}
                    </>
                </ScrollableDialogContent>
                <DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </>
        ),
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};
