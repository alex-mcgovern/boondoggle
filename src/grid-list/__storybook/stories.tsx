import type { Meta, StoryObj } from "@storybook/react";

import { GridList } from "..";

const meta = {
    args: {},
    component: GridList.Root,
    parameters: {
        layout: "padded",
    },
    title: "GridList",
} satisfies Meta<typeof GridList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const DATA = [
    {
        description: "Description 1",
        href: "https://boondoggle.design",
        name: "Item 1",
    },
    {
        description: "Description 2",
        href: "https://boondoggle.design",
        name: "Item 2",
    },
    {
        description: "Description 3",
        href: "https://boondoggle.design",
        name: "Item 3",
    },
];

export const Default: Story = {
    args: {
        items: DATA,
    },
    render: (props) => {
        return (
            <GridList.Root
                {...props}
                items={DATA}
            >
                {({ description, href, name }) => {
                    return (
                        <GridList.Item
                            href={href}
                            id={name}
                        >
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </GridList.Item>
                    );
                }}
            </GridList.Root>
        );
    },
};
