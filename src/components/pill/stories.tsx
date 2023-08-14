import { faTriangleCircleSquare } from "@fortawesome/sharp-regular-svg-icons";

import { Pill as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";

import type { PillProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Pill",
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

const TemplateSizes: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp size="lg" slotLeft={<Icon icon={faTriangleCircleSquare} />}>
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp size="md" slotLeft={<Icon icon={faTriangleCircleSquare} />}>
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp size="sm" slotLeft={<Icon icon={faTriangleCircleSquare} />}>
        {LOREM.text_xxs}
      </StoryComp>
    </Box>
  );
};

export const Sizes: StoryObj<StoryCompProps> = {
  name: "Sizes",
  render: TemplateSizes,
};

/** -----------------------------------------------------------------------------
 * Color
 * ------------------------------------------------------------------------------- */

const TemplateColors: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp
        colorOverlay="blue"
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="red"
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="green"
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="amber"
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="grey"
        slotLeft={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
    </Box>
  );
};

export const Colors: StoryObj<StoryCompProps> = {
  name: "Colors",
  render: TemplateColors,
};
