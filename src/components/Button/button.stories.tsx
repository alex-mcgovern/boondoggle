import React from "react";
import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import type { Story } from "@storybook/react";
import type { ButtonProps } from ".";
import { Button as StoryComponent } from ".";
import { Box } from "../Box";

// eslint-disable-next-line react/function-component-definition
const Template: Story<ButtonProps> = ({ name, ...rest }) => {
  return (
    <StoryComponent name={name} {...rest}>
      Click me
    </StoryComponent>
  );
};

/** -----------------------------------------------------------------------------
 * Appearance
 * ------------------------------------------------------------------------------- */

export const StoryButtonAppearancePrimary = Template.bind({});

StoryButtonAppearancePrimary.args = {
  appearance: "primary",
};

export const StoryButtonAppearanceSecondary = Template.bind({});

StoryButtonAppearanceSecondary.args = {
  appearance: "secondary",
};

export const StoryButtonAppearanceTertiary = Template.bind({});

StoryButtonAppearanceTertiary.args = {
  appearance: "tertiary",
};

// eslint-disable-next-line react/function-component-definition
const StoryButtonTemplateAllAppearances: Story<ButtonProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing3">
      <Template appearance="primary" {...rest} />
      <Template appearance="secondary" {...rest} />
      <Template appearance="tertiary" {...rest} />
    </Box>
  );
};

/** -----------------------------------------------------------------------------
 * Color
 * ------------------------------------------------------------------------------- */

export const StoryButtonColorAccent = StoryButtonTemplateAllAppearances.bind(
  {}
);

StoryButtonColorAccent.args = {
  color: "accent",
};

export const StoryButtonColorNeutral = StoryButtonTemplateAllAppearances.bind(
  {}
);

StoryButtonColorNeutral.args = {
  color: "neutral",
};

export const StoryButtonColorSemanticGood =
  StoryButtonTemplateAllAppearances.bind({});

StoryButtonColorSemanticGood.args = {
  color: "semanticGreen",
};

export const StoryButtonColorSemanticBad =
  StoryButtonTemplateAllAppearances.bind({});

StoryButtonColorSemanticBad.args = {
  color: "semanticRed",
};

/** -----------------------------------------------------------------------------
 * Customisation
 * ------------------------------------------------------------------------------- */

export const StoryButtonCustomisationMargin = Template.bind({});

StoryButtonCustomisationMargin.args = {
  margin: "spacing5",
};

// export const CustomisationWidth = Template.bind({});

// CustomisationWidth.args = {
//   width: "25vw",
// };

/** -----------------------------------------------------------------------------
 *  FontAwesome
 * ------------------------------------------------------------------------------- */

export const StoryButtonIconLeft = Template.bind({});

StoryButtonIconLeft.args = {
  iconLeft: faTriangleCircleSquare,
};

export const StoryButtonIconRight = Template.bind({});

StoryButtonIconRight.args = {
  iconRight: faTriangleCircleSquare,
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

export const StoryButtonIconSizeSm = Template.bind({});

StoryButtonIconSizeSm.args = {
  size: "sm",
};

export const StoryButtonIconSizeMd = Template.bind({});

StoryButtonIconSizeMd.args = {
  size: "md",
};

export const StoryButtonIconSizeLg = Template.bind({});

StoryButtonIconSizeLg.args = {
  size: "lg",
};

export const StoryButtonIconSizeSquare = Template.bind({});

StoryButtonIconSizeSquare.args = {
  size: "square",
  iconLeft: faTriangleCircleSquare,
  children: null,
};

/** -----------------------------------------------------------------------------
 *  State
 * ------------------------------------------------------------------------------- */

export const StoryButtonIconStateHover = Template.bind({});

StoryButtonIconStateHover.parameters = { pseudo: { hover: true } };

export const StoryButtonIconStateFocusVisible = Template.bind({});

StoryButtonIconStateFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const StoryButtonIconStateDisabled = Template.bind({});

StoryButtonIconStateDisabled.args = {
  disabled: true,
};
