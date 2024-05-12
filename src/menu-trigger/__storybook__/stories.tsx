import type { Meta, StoryObj } from "@storybook/react";

import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";

import { MenuTrigger } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";

const meta = {
    args: {
        children: (
            <Button
                appearance="secondary"
                square
            >
                <Icon icon={faBars} />
            </Button>
        ),
    },
    component: MenuTrigger,
    title: "Components/MenuTrigger",
} satisfies Meta<typeof MenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
