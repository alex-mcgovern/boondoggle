import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Menu } from "..";
import { Button } from "../../button";
import { Popover } from "../../popover";

const meta = {
    args: {
        children: (
            <>
                <Button>Trigger</Button>
                <Popover>
                    <Menu.DropdownMenu>
                        <Menu.Section>
                            <Menu.Item>Item 1</Menu.Item>
                            <Menu.Item>Item 2</Menu.Item>
                            <Menu.Item>Item 3</Menu.Item>
                        </Menu.Section>
                    </Menu.DropdownMenu>
                </Popover>
            </>
        ),
    },
    component: Menu.Trigger,
    title: "Components/Menu",
} satisfies Meta<ComponentProps<typeof Menu.Trigger>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
