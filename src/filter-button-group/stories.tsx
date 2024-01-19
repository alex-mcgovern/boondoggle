import type { Meta, StoryObj } from "@storybook/react";

import { faClock } from "@fortawesome/pro-solid-svg-icons";

import { FilterButton, FilterButtonGroup, RemoveFilterButton } from ".";
import { Icon } from "../icon";
import { MenuButton } from "../menu-button";

const meta = {
    args: {},
    component: FilterButtonGroup,
    render: (args) => (
        <FilterButtonGroup {...args}>
            <MenuButton
                items={[
                    { id: "item_1", name: "Item 1" },
                    { id: "item_2", name: "Item 2" },
                ]}
            >
                <FilterButton>
                    <Icon
                        color="text_low_contrast"
                        icon={faClock}
                    />
                    Filter 1
                </FilterButton>
            </MenuButton>
            <RemoveFilterButton />
        </FilterButtonGroup>
    ),
    title: "FilterButtonGroup",
} satisfies Meta<typeof FilterButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isFilterApplied: false,
    },
};

export const isFilterApplied: Story = {
    args: {
        isFilterApplied: true,
    },
};

export const isFilterAppliedFalse: Story = {
    args: {
        isFilterApplied: false,
    },
    render: (args) => {
        return (
            <FilterButtonGroup {...args}>
                <MenuButton
                    items={[
                        { id: "item_1", name: "Item 1" },
                        { id: "item_2", name: "Item 2" },
                    ]}
                >
                    <FilterButton>
                        <Icon
                            color="text_low_contrast"
                            icon={faClock}
                        />
                        Filter 1
                    </FilterButton>
                </MenuButton>
            </FilterButtonGroup>
        );
    },
};
