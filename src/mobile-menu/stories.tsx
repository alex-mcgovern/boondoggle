import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import {
    MobileMenu,
    MobileMenuFooter,
    MobileMenuHeader,
    ScrollableMobileMenuContent,
} from ".";
import { Button } from "../button";
import { css } from "../css/index.css";

const meta = {
    args: {
        children: ({ close }) => (
            <>
                <MobileMenuHeader
                    close={close}
                    title="MobileMenu Title"
                />
                <ScrollableMobileMenuContent>
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
                </ScrollableMobileMenuContent>
                <MobileMenuFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </MobileMenuFooter>
            </>
        ),
        modalOverlayProps: {
            isDismissable: true,
        },
    },
    component: MobileMenu,
    title: "Components/MobileMenu",
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
