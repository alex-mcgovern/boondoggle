import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import type { ButtonProps } from ".";

import { Button } from ".";
import { capitalize } from "../_lib/string";
import { Box } from "../box";
import { Icon } from "../icon";

const meta = {
    args: {
        children: "Button",
    },
    component: Button,
    title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        children: "Press me",
        onPress: () => {
            alert("Hello world!");
        },
    },
    render: (props) => {
        return <Button {...props} />;
    },
};

const SizesWrapper = (props: ButtonProps) => {
    const sizes: ButtonProps["size"][] = [
        "xs",
        "sm",
        "md",
        "lg",
        "square_xs",
        "square_sm",
        "square_md",
        "square_lg",
    ];

    return (
        <>
            {sizes.map((size) => {
                return (
                    <Button
                        {...props}
                        key={size}
                        size={size}
                    >
                        {size?.startsWith("square") ? (
                            <Icon icon={faShapes} />
                        ) : (
                            `${capitalize(
                                props.appearance as string,
                            )} ${size?.toLocaleUpperCase()}`
                        )}
                    </Button>
                );
            })}
        </>
    );
};

export const KitchenSink: Story = {
    args: {
        appearance: "primary",
        onPress: () => {
            alert("Hi there");
        },
    },
    render: (props) => {
        return (
            <Box
                __gridTemplateColumns="1fr 1fr 1fr 1fr auto auto auto auto"
                alignItems="center"
                display="grid"
                gap="space_2"
            >
                <SizesWrapper
                    {...props}
                    appearance="primary"
                />
                <SizesWrapper
                    {...props}
                    appearance="secondary"
                />
                <SizesWrapper
                    {...props}
                    appearance="ghost"
                />
            </Box>
        );
    },
};

export const Default: Story = {
    args: {
        appearance: "primary",
    },
    render: (props) => {
        return <Button {...props} />;
    },
};

export const AppearancePrimary: Story = {
    args: { appearance: "primary", children: "Primary" },
};
export const AppearanceSecondary: Story = {
    args: { appearance: "secondary", children: "Secondary" },
};
export const AppearanceGhost: Story = {
    args: { appearance: "ghost", children: "Ghost" },
};

export const ColorAmber: Story = {
    args: { children: "Amber", colorOverlay: "amber" },
};
export const ColorBlue: Story = {
    args: { children: "Blue", colorOverlay: "blue" },
};
export const ColorGreen: Story = {
    args: { children: "Green", colorOverlay: "green" },
};
export const ColorGrey: Story = {
    args: { children: "Grey", colorOverlay: "grey" },
};
export const ColorRed: Story = {
    args: { children: "Red", colorOverlay: "red" },
};
export const ColorDefault: Story = {
    args: { children: "Default", colorOverlay: "default" },
};

export const Size: Story = {
    args: {
        appearance: "primary",
    },
    render: (props) => {
        const sizes: ButtonProps["size"][] = [
            "xs",
            "sm",
            "md",
            "lg",
            "square_xs",
            "square_sm",
            "square_md",
            "square_lg",
        ];

        return (
            <Box
                __gridTemplateColumns="1fr 1fr 1fr 1fr auto auto auto auto"
                alignItems="center"
                display="grid"
                gap="space_2"
            >
                {sizes.map((size) => {
                    return (
                        <Button
                            {...props}
                            key={size}
                            size={size}
                        >
                            {size?.startsWith("square") ? (
                                <Icon icon={faShapes} />
                            ) : (
                                `Size ${size?.toLocaleLowerCase()}`
                            )}
                        </Button>
                    );
                })}
            </Box>
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
