import { faTriangleCircleSquare } from "@fortawesome/sharp-regular-svg-icons";

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
const Template: StoryFn<StoryCompProps> = ({
  children,
  name,
  ...rest
}: StoryCompProps) => {
  return (
    <StoryComp name={name} {...rest}>
      {children}
    </StoryComp>
  );
};

/**
 * Default
 */
export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: "Click me",
  },

  render: Template,
};

/** -----------------------------------------------------------------------------
 * As prop
 * ------------------------------------------------------------------------------- */

const TemplateAsProp: StoryFn<StoryCompProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing_3">
      <StoryComp {...rest} as={Link} href="/">
        I am a `Link` component
      </StoryComp>
      <StoryComp {...rest} as="a" href="/">
        I am an anchor element
      </StoryComp>
    </Box>
  );
};

export const AsProp: StoryObj<StoryCompProps> = {
  render: TemplateAsProp,
};

/** -----------------------------------------------------------------------------
 * Appearances
 * ------------------------------------------------------------------------------- */

const TemplateAppearances: StoryFn<StoryCompProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing_3">
      <StoryComp {...rest} appearance="primary" name="primary">
        Primary
      </StoryComp>
      <StoryComp {...rest} appearance="secondary" name="secondary">
        Secondary
      </StoryComp>
      <StoryComp {...rest} appearance="tertiary" name="tertiary">
        Tertiary
      </StoryComp>
      <StoryComp {...rest} appearance="ghost" name="ghost">
        Ghost
      </StoryComp>
      <StoryComp {...rest} appearance="link" name="link">
        Link
      </StoryComp>
    </Box>
  );
};

export const Appearances: StoryObj<StoryCompProps> = {
  render: TemplateAppearances,
};

/** -----------------------------------------------------------------------------
 * Color
 * ------------------------------------------------------------------------------- */

const TemplateColors: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
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

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

const TemplateSizes: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        id="lg"
        name="lg"
        size="lg"
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="md"
        name="md"
        size="md"
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="sm"
        name="sm"
        size="sm"
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      >
        Click me
      </StoryComp>
      <StoryComp
        id="square_md"
        name="square_md"
        size="square_md"
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      />
      <StoryComp
        id="square_sm"
        name="square_sm"
        size="square_sm"
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      />
    </Box>
  );
};

export const Sizes: StoryObj<StoryCompProps> = {
  render: TemplateSizes,
};

/** -----------------------------------------------------------------------------
 * Slot
 * ------------------------------------------------------------------------------- */

const TemplateSlot: StoryFn<StoryCompProps> = (rest) => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        {...rest}
        id="slotLeft"
        name="slotLeft"
        placeholder={LOREM.placeholder()}
        slotLeft={[<Icon icon={faTriangleCircleSquare} />]}
      >
        Click me
      </StoryComp>
      <StoryComp
        {...rest}
        id="slotRight"
        name="slotRight"
        placeholder={LOREM.placeholder()}
        slotRight={[<Icon icon={faTriangleCircleSquare} />]}
      >
        Click me
      </StoryComp>
    </Box>
  );
};

export const Slot: StoryObj<StoryCompProps> = {
  render: TemplateSlot,
};

/**
 * State
 */
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
