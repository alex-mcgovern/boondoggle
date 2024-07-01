import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { MobileMenu } from "..";
import { Button } from "../../button";

const meta = {
    args: {
        children: ({ close }) => (
            <>
                <MobileMenu.Header
                    close={close}
                    title="MobileMenu Title"
                />
                <MobileMenu.Content>
                    <>
                        <p>
                            A modal MobileMenu component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/MobileMenu.html">
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
                </MobileMenu.Content>
                <MobileMenu.Footer>
                    <Button
                        // className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </MobileMenu.Footer>
            </>
        ),
        modalOverlayProps: {
            isDismissable: true,
        },
    },
    component: MobileMenu.Root,
    title: "MobileMenu",
} satisfies Meta<typeof MobileMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
