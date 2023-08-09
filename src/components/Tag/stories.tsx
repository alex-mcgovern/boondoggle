import { faTriangleCircleSquare } from "@fortawesome/pro-light-svg-icons";

import { Tag as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../Box";
import { Icon } from "../Icon";

import type { TagProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Tag",
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

const TemplateSizes: StoryFn<StoryCompProps> = () => {
  return (
    <Box alignItems="center" display="flex" gap="spacing_3">
      <StoryComp size="lg" slotRight={<Icon icon={faTriangleCircleSquare} />}>
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp size="md" slotRight={<Icon icon={faTriangleCircleSquare} />}>
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp size="sm" slotRight={<Icon icon={faTriangleCircleSquare} />}>
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
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="red"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
      >
        {LOREM.text_xxs}
      </StoryComp>
      <StoryComp
        colorOverlay="green"
        slotRight={<Icon icon={faTriangleCircleSquare} />}
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
        slotRight={<Icon icon={faTriangleCircleSquare} />}
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
