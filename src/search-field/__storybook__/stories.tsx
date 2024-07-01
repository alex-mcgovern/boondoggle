import type { Meta, StoryObj } from "@storybook/react";

import { SearchField } from "..";
import { Group } from "../../group";
import { Input } from "../../input";
import { Label } from "../../label";

const meta = {
    args: {},
    component: SearchField.Root,
    render: (args) => {
        return (
            <SearchField.Root {...args}>
                <Label>Label</Label>
                <Group>
                    <Input
                        icon={<SearchField.Icon />}
                        unstyled
                    />
                    <SearchField.ClearButton />
                </Group>
            </SearchField.Root>
        );
    },
    title: "SearchField",
} satisfies Meta<typeof SearchField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
