import type { Meta, StoryObj } from "@storybook/react";

import {
    FilterButton,
    FilterButtonGroup,
    FilterButtonGroupLabel,
    RemoveFilterButton,
} from ".";
import { MenuButton } from "../menu-button";

const meta = {
    args: {},
    component: FilterButtonGroup,
    render: (args) => (
        <FilterButtonGroup {...args}>
            <FilterButtonGroupLabel>Filter by</FilterButtonGroupLabel>
            <MenuButton
                items={[
                    { id: "item_1", name: "Item 1" },
                    { id: "item_2", name: "Item 2" },
                ]}
            >
                <FilterButton>Filter 1</FilterButton>
            </MenuButton>
            <RemoveFilterButton />
        </FilterButtonGroup>
    ),
    title: "FilterButtonGroup",
} satisfies Meta<typeof FilterButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
