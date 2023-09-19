import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons";

import { Button as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Link } from "../../../test/link.comp.mock";
import { Box } from "../box";
import { Icon } from "../icon";

import type { ButtonProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    component: StoryComp,
    title: "Components/Button",
};

const Template: StoryFn<StoryCompProps> = ({ children, name, ...rest }: StoryCompProps) => {
    return (
        <StoryComp
            name={name}
            {...rest}
        >
            {children}
        </StoryComp>
    );
};

export const Default: StoryObj<StoryCompProps> = {
    args: {
        children: "Button",
    },

    render: Template,
};

const TemplateAsProp: StoryFn<StoryCompProps> = (rest) => {
    return (
        <Box
            display="flex"
            gap="space_6"
        >
            <StoryComp
                {...rest}
                as={Link}
                href="/"
            >
                I am a `Link` component
            </StoryComp>
            <StoryComp
                {...rest}
                as="a"
                href="/"
            >
                I am an anchor element
            </StoryComp>
        </Box>
    );
};

export const AsProp: StoryObj<StoryCompProps> = {
    render: TemplateAsProp,
};

const TemplateAppearances: StoryFn<StoryCompProps> = (rest) => {
    return (
        <Box
            display="flex"
            gap="space_6"
        >
            <StoryComp
                {...rest}
                appearance="primary"
                name="primary"
            >
                Primary
            </StoryComp>
            <StoryComp
                {...rest}
                appearance="secondary"
                name="secondary"
            >
                Secondary
            </StoryComp>
            <StoryComp
                {...rest}
                appearance="ghost"
                name="ghost"
            >
                Ghost
            </StoryComp>
            <StoryComp
                {...rest}
                appearance="link"
                name="link"
            >
                Link
            </StoryComp>
        </Box>
    );
};

export const Appearances: StoryObj<StoryCompProps> = {
    render: TemplateAppearances,
};

const TemplateColors: StoryFn<StoryCompProps> = () => {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_6"
        >
            <StoryComp
                colorOverlay="blue"
                name="blue"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                {LOREM.text_xxs}
            </StoryComp>
            <StoryComp
                colorOverlay="red"
                name="red"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                {LOREM.text_xxs}
            </StoryComp>
            <StoryComp
                colorOverlay="green"
                name="green"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                {LOREM.text_xxs}
            </StoryComp>
            <StoryComp
                colorOverlay="amber"
                name="amber"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                {LOREM.text_xxs}
            </StoryComp>
            <StoryComp
                colorOverlay="grey"
                name="grey"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                {LOREM.text_xxs}
            </StoryComp>
        </Box>
    );
};

export const Colors: StoryObj<StoryCompProps> = {
    render: TemplateColors,
};

export const IsLoading: StoryObj<StoryCompProps> = {
    args: {
        isLoading: true,
    },
};

const TemplateSizes: StoryFn<StoryCompProps> = (args) => {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_6"
        >
            <StoryComp
                {...args}
                id="lg"
                name="lg"
                size="lg"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                Button
            </StoryComp>
            <StoryComp
                {...args}
                id="md"
                name="md"
                size="md"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                Button
            </StoryComp>
            <StoryComp
                {...args}
                id="sm"
                name="sm"
                size="sm"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                Button
            </StoryComp>
            <StoryComp
                {...args}
                id="square_md"
                name="square_md"
                size="square_md"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
            <StoryComp
                {...args}
                id="square_sm"
                name="square_sm"
                size="square_sm"
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
        </Box>
    );
};

export const Sizes: StoryObj<StoryCompProps> = {
    args: {
        onClick: () => {
            alert("You clicked me!");
        },
    },
    render: TemplateSizes,
};

const TemplateSlot: StoryFn<StoryCompProps> = (rest) => {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_6"
        >
            <StoryComp
                {...rest}
                id="slotLeft"
                name="slotLeft"
                placeholder={LOREM.placeholder()}
                slotLeft={[<Icon icon={faTriangleCircleSquare} />]}
            >
                Button
            </StoryComp>
            <StoryComp
                {...rest}
                id="slotRight"
                name="slotRight"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            >
                Button
            </StoryComp>
        </Box>
    );
};

export const Slot: StoryObj<StoryCompProps> = {
    render: TemplateSlot,
};

export const StateHover: StoryObj<StoryCompProps> = {
    args: { children: "Hovered" },

    parameters: { pseudo: { hover: true } },
    render: Template,
};

export const StateFocusVisible: StoryObj<StoryCompProps> = {
    args: { children: "Focused" },

    parameters: { pseudo: { focusVisible: true } },
    render: Template,
};

export const StateDisabled: StoryObj<StoryCompProps> = {
    args: { children: "Disabled", disabled: true },

    render: Template,
};
