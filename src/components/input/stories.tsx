/* eslint-disable no-alert */

/* eslint-disable react-perf/jsx-no-jsx-as-prop */

/* eslint-disable react-perf/jsx-no-new-function-as-prop */

/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons";

import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";
import { FieldInput as StoryComp } from "./FieldInput";

import type { InputProps as StoryCompProps } from "./FieldInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
    },
    component: StoryComp,
    title: "Components/FieldInput",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const CustomisationMargin: Story = {
//   args: {
//     wrapperProps: {
//       margin: "space_10",
//     },
//   },
// };

export const Default: Story = {
    args: {
        id: LOREM.id(),
        label: LOREM.label(),
    },
};

export const TypeDate: Story = {
    args: {
        id: LOREM.id(),
        label: LOREM.label(),
        type: "date",
    },
};

export const Invalid: Story = {
    args: {
        id: LOREM.id(),
        invalid: true,
        label: LOREM.label(),
    },
};

export const HasBorderFalse: Story = {
    args: {
        hasBorder: false,
        id: LOREM.id(),
        label: LOREM.label(),
    },
};

export const Description: Story = {
    args: {
        description: LOREM.text_lg,
        id: LOREM.id(),
        label: LOREM.label(),
    },
};

const TemplateColors = () => {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_6"
        >
            <StoryComp
                colorOverlay="blue"
                name="blue"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
            <StoryComp
                colorOverlay="red"
                name="red"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
            <StoryComp
                colorOverlay="green"
                name="green"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
            <StoryComp
                colorOverlay="amber"
                name="amber"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
            <StoryComp
                colorOverlay="grey"
                name="grey"
                placeholder={LOREM.placeholder()}
                slotRight={[<Icon icon={faTriangleCircleSquare} />]}
            />
        </Box>
    );
};

export const Colors: StoryObj<StoryCompProps> = {
    render: TemplateColors,
};

const TemplateSizes = (props: Omit<StoryCompProps, "name" | "placeholder">) => {
    return (
        <Box
            display="grid"
            gap="space_8"
            gridTemplateColumns="3x"
            marginBottom="space_8"
        >
            <StoryComp
                {...(props as StoryCompProps)}
                id="lg"
                label="lg"
                name="lg"
                placeholder={LOREM.placeholder()}
                size="lg"
            />
            <StoryComp
                {...(props as StoryCompProps)}
                id="md"
                label="md"
                name="md"
                placeholder={LOREM.placeholder()}
                size="md"
            />
            <StoryComp
                {...(props as StoryCompProps)}
                id="sm"
                label="sm"
                name="sm"
                placeholder={LOREM.placeholder()}
                size="sm"
            />
        </Box>
    );
};

export const Sizes: Story = {
    render: TemplateSizes,
};

const TemplateSlot = () => {
    return (
        <>
            <Box as="h3">Slot left (icon)</Box>
            <TemplateSizes slotLeft={[<Icon icon={faTriangleCircleSquare} />]} />
            <TemplateSizes
                slotLeft={[
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                ]}
            />
            <TemplateSizes
                slotLeft={[
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                ]}
            />

            <hr />
            <Box as="h3">Slot left (button)</Box>

            <TemplateSizes isClearable />
            <TemplateSizes
                isClearable
                isCopyable
            />
            <TemplateSizes
                isClearable
                isCopyable
            />

            <hr />
            <Box as="h3">Slot right (icon)</Box>

            <TemplateSizes slotRight={[<Icon icon={faTriangleCircleSquare} />]} />
            <TemplateSizes
                slotRight={[
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                ]}
            />
            <TemplateSizes
                slotRight={[
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                    <Icon icon={faTriangleCircleSquare} />,
                ]}
            />

            <hr />
            <Box as="h3">Slot right (button)</Box>

            <TemplateSizes isClearable />
            <TemplateSizes
                isClearable
                isCopyable
            />
            <TemplateSizes
                isClearable
                isCopyable
            />
        </>
    );
};

export const Slot: Story = {
    render: TemplateSlot,
};

const TemplateIsClearable = () => {
    return (
        <>
            <Box as="h3">Is clearable</Box>

            <TemplateSizes isClearable />
        </>
    );
};

export const IsClearable: Story = {
    render: TemplateIsClearable,
};

const TemplateIsCopyable = () => {
    return (
        <>
            <Box as="h3">Is copyable</Box>

            <TemplateSizes isCopyable />
        </>
    );
};

export const IsCopyable: Story = {
    render: TemplateIsCopyable,
};

const TemplateIsVisibilityToggleable = () => {
    return (
        <>
            <Box as="h3">Is visibility toggleable</Box>

            <TemplateSizes
                defaultValue={LOREM.text_xxs}
                isVisibilityToggleable
                isVisible={false}
            />
        </>
    );
};

export const IsVisibilityToggleable: Story = {
    render: TemplateIsVisibilityToggleable,
};

const TemplateIsVisibilityToggleableAndIsCopyable = () => {
    return (
        <>
            <Box as="h3">Is visibility toggleable and is copyable</Box>

            <TemplateSizes
                defaultValue={LOREM.text_xxs}
                isCopyable
                isVisibilityToggleable
                isVisible={false}
            />
        </>
    );
};

export const IsVisibilityToggleableAndIsCopyable: Story = {
    render: TemplateIsVisibilityToggleableAndIsCopyable,
};

export const StateHover: Story = {
    parameters: { pseudo: { hover: true } },
};

export const StateFocusVisible: Story = {
    parameters: { pseudo: { focusVisible: true } },
};

export const StateDisabled: Story = {
    args: { disabled: true },
};

export const StateReadOnly: Story = {
    args: { readOnly: true },
};
