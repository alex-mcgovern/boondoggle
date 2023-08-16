/* eslint-disable no-alert */

/* eslint-disable react-perf/jsx-no-jsx-as-prop */

/* eslint-disable react-perf/jsx-no-new-function-as-prop */

/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { faTriangleCircleSquare } from "@fortawesome/sharp-regular-svg-icons";

import { Input as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";

import type { InputProps as StoryCompProps } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
  },
  component: StoryComp,
  title: "Components/Input",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Customisation examples
 */
export const CustomisationMargin: Story = {
  args: {
    wrapperProps: {
      margin: "spacing_5",
    },
  },
  name: "customisation/margin",
};

/**
 * FieldLabel
 */
export const FieldLabel: Story = {
  args: {
    id: LOREM.id(),
    label: LOREM.label(),
  },
  name: "label",
};

export const Invalid: Story = {
  args: {
    id: LOREM.id(),
    invalid: true,
    label: LOREM.label(),
  },
  name: "invalid",
};

export const HasBorderFalse: Story = {
  args: {
    hasBorder: false,
    id: LOREM.id(),
    label: LOREM.label(),
  },
  name: "has-border/false",
};

export const Description: Story = {
  args: {
    description: LOREM.text_lg,
    id: LOREM.id(),
    label: LOREM.label(),
  },
  name: "description",
};

/** -----------------------------------------------------------------------------
 * Colors
 * ------------------------------------------------------------------------------- */

const TemplateColors = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        colorOverlay="blue"
        name="blue"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        colorOverlay="red"
        name="red"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        colorOverlay="green"
        name="green"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        colorOverlay="amber"
        name="amber"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        colorOverlay="grey"
        name="grey"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
    </Box>
  );
};

export const Colors: StoryObj<StoryCompProps> = {
  name: "Colors",
  render: TemplateColors,
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

const TemplateSizes = (props: Omit<StoryCompProps, "name" | "placeholder">) => {
  return (
    <Box
      // alignItems="center"
      display="grid"
      gap="spacing_4"
      gridTemplateColumns="3x"
      marginBottom="spacing_4"
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
  name: "Sizes",
  render: TemplateSizes,
};

/** -----------------------------------------------------------------------------
 * Slot
 * ------------------------------------------------------------------------------- */

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
      <TemplateSizes isClearable isCopyable strCopy="Copied" />
      <TemplateSizes isClearable isCopyable strCopy="Copied" />

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
      <TemplateSizes isClearable isCopyable strCopy="Copied" />
      <TemplateSizes isClearable isCopyable strCopy="Copied" />
    </>
  );
};

export const Slot: Story = {
  name: "Slot",
  render: TemplateSlot,
};

/** -----------------------------------------------------------------------------
 * Is clearable
 * ------------------------------------------------------------------------------- */

const TemplateIsClearable = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        defaultValue={LOREM.text_xxs}
        id="lg"
        isClearable
        label="lg"
        name="lg"
        placeholder={LOREM.placeholder()}
        size="lg"
      />
      <StoryComp
        defaultValue={LOREM.text_xxs}
        id="md"
        isClearable
        label="md"
        name="md"
        placeholder={LOREM.placeholder()}
        size="md"
      />
      <StoryComp
        defaultValue={LOREM.text_xxs}
        id="sm"
        isClearable
        label="sm"
        name="sm"
        placeholder={LOREM.placeholder()}
        size="sm"
      />
    </Box>
  );
};

export const IsClearable: Story = {
  render: TemplateIsClearable,
};

/** -----------------------------------------------------------------------------
 * Is copyable
 * ------------------------------------------------------------------------------- */

const TemplateIsCopyable = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="lg"
        isCopyable
        label="lg"
        name="lg"
        placeholder={LOREM.placeholder()}
        readonly
        size="lg"
        strCopy="Copy value"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="md"
        isCopyable
        label="md"
        name="md"
        placeholder={LOREM.placeholder()}
        readonly
        size="md"
        strCopy="Copy value"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="sm"
        isCopyable
        label="sm"
        name="sm"
        placeholder={LOREM.placeholder()}
        readonly
        size="sm"
        strCopy="Copy value"
      />
    </Box>
  );
};

export const IsCopyable: Story = {
  render: TemplateIsCopyable,
};

/** -----------------------------------------------------------------------------
 * Is password
 * ------------------------------------------------------------------------------- */

const TemplateIsPassword = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="lg"
        label="lg"
        name="lg"
        placeholder={LOREM.placeholder()}
        size="lg"
        type="password"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="md"
        label="md"
        name="md"
        placeholder={LOREM.placeholder()}
        size="md"
        type="password"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="sm"
        label="sm"
        name="sm"
        placeholder={LOREM.placeholder()}
        size="sm"
        type="password"
      />
    </Box>
  );
};

export const IsPassword: Story = {
  render: TemplateIsPassword,
};

/** -----------------------------------------------------------------------------
 * Is clearable and is copyable
 * ------------------------------------------------------------------------------- */

const TemplateIsClearableAndIsCopyable = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="lg"
        isClearable
        isCopyable
        label="lg"
        name="lg"
        placeholder={LOREM.placeholder()}
        // readonly
        size="lg"
        strCopy="Copy value"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="md"
        isClearable
        isCopyable
        label="md"
        name="md"
        placeholder={LOREM.placeholder()}
        // readonly
        size="md"
        strCopy="Copy value"
      />
      <StoryComp
        defaultValue={LOREM.placeholder()}
        id="sm"
        isClearable
        isCopyable
        label="sm"
        name="sm"
        placeholder={LOREM.placeholder()}
        // readonly
        size="sm"
        strCopy="Copy value"
      />
    </Box>
  );
};

export const IsClearableAndIsCopyable: Story = {
  render: TemplateIsClearableAndIsCopyable,
};

/** -----------------------------------------------------------------------------
 * State
 * ------------------------------------------------------------------------------- */

export const StateHover: Story = {
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
};
export const StateFocusVisible: Story = {
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
};
export const StateDisabled: Story = {
  args: { disabled: true },
  name: "state/disabled",
};
export const StateReadOnly: Story = {
  args: { readOnly: true },
  name: "state/readOnly",
};
