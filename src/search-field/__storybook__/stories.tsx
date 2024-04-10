import type { Meta, StoryObj } from "@storybook/react";

import { SearchField, SearchFieldClearButton, SearchFieldIcon } from "..";
import { Group } from "../../group";
import { Input } from "../../input";
import { Label } from "../../label";

const meta = {
    args: {},
    component: SearchField,
    render: (args) => {
        return (
            <SearchField {...args}>
                <Label>Label</Label>
                <Group>
                    <SearchFieldIcon />
                    <Input variant="unstyled" />
                    <SearchFieldClearButton />
                </Group>
            </SearchField>
        );
    },
    title: "Components/SearchField",
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
