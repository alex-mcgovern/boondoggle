import { faTriangleCircleSquare } from "@fortawesome/pro-light-svg-icons";

import { Input as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box_comp";
import { Icon } from "../icon_comp";

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

export const IsClearable: Story = {
  args: {
    id: LOREM.id(),
    isClearable: true,
    label: LOREM.label(),
  },
  name: "is-clearable",
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

const TemplateSizes = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        id="lg"
        label="lg"
        name="lg"
        placeholder={LOREM.placeholder()}
        size="lg"
      />
      <StoryComp
        id="md"
        label="md"
        name="md"
        placeholder={LOREM.placeholder()}
        size="md"
      />
      <StoryComp
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
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        id="slotLeft"
        label="slotLeft"
        name="slotLeft"
        placeholder={LOREM.placeholder()}
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      />
      <StoryComp
        id="slotRight"
        label="slotRight"
        name="slotRight"
        placeholder={LOREM.placeholder()}
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      />
    </Box>
  );
};

export const Slot: Story = {
  name: "Slot",
  render: TemplateSlot,
};

/**
 * State
 */
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
