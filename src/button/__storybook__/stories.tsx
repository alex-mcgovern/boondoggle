import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Button } from "..";
import { Grid } from "../../grid";
import { Icon } from "../../icon";

const meta = {
    component: Button,
    title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Press me",
        onPress: () => {
            alert("Hello world!");
        },
    },
};

export const Primary: Story = {
    args: { appearance: "primary", children: "Primary" },
};

export const Secondary: Story = {
    args: { appearance: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
    args: { appearance: "ghost", children: "Ghost" },
};

export const Red: Story = {
    args: { children: "Click me", color: "red" },
};
export const Green: Story = {
    args: { children: "Click me", color: "green" },
};
export const Blue: Story = {
    args: { children: "Click me", color: "blue" },
};
export const Amber: Story = {
    args: { children: "Click me", color: "amber" },
};

export const Size: Story = {
    args: {
        appearance: "primary",
    },
    render: (props) => {
        const sizes: ComponentProps<typeof Button>["size"][] = [
            "sm",
            "md",
            "lg",
        ];

        return (
            <Grid
                align="center"
                columns={3}
            >
                {sizes.map((size) => {
                    return (
                        <Button
                            {...props}
                            key={size}
                            size={size}
                        >
                            {`Size ${size?.toLocaleLowerCase()}`}
                        </Button>
                    );
                })}
            </Grid>
        );
    },
};

export const SizeSquare: Story = {
    args: {
        appearance: "primary",
    },
    render: (props) => {
        const sizes: ComponentProps<typeof Button>["size"][] = [
            "sm",
            "md",
            "lg",
        ];

        return (
            <Grid
                align="center"
                columns={3}
            >
                {sizes.map((size) => {
                    return (
                        <Button
                            {...props}
                            key={size}
                            size={size}
                            square
                        >
                            {<Icon icon={faShapes} />}
                        </Button>
                    );
                })}
            </Grid>
        );
    },
};

export const SlotLeft: Story = {
    args: {
        children: (
            <>
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
                Button
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                Button
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
