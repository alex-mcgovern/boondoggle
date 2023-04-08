import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Box } from "../Box";
import { Icon } from "../Icon";
import { Button as StoryComponent } from "./button.component";

import type { ButtonProps } from "./button.component";
import type { Story } from "@storybook/react";

export const Template: Story<ButtonProps> = ({
  name,
  children = "Click me",
  ...rest
}) => {
  return (
    <StoryComponent name={name} {...rest}>
      {children}
    </StoryComponent>
  );
};

/** -----------------------------------------------------------------------------
 * Appearance
 * ------------------------------------------------------------------------------- */

export const AppearancePrimary = Template.bind({});
export const AppearanceTertiary = Template.bind({});
export const AppearanceSecondary = Template.bind({});

AppearancePrimary.args = {
  appearance: "primary",
  children: "Primary",
};
AppearanceSecondary.args = {
  appearance: "secondary",
  children: "Secondary",
};
AppearanceTertiary.args = {
  appearance: "tertiary",
  children: "Tertiary",
};

/** -----------------------------------------------------------------------------
 * Color
 * ------------------------------------------------------------------------------- */
const TemplateAllAppearances: Story<ButtonProps> = (rest) => {
  return (
    <Box display="flex" gap="spacing3">
      <StoryComponent appearance="primary" name="primary" {...rest}>
        Primary
      </StoryComponent>
      <StoryComponent appearance="secondary" name="secondary" {...rest}>
        Secondary
      </StoryComponent>
      <StoryComponent appearance="tertiary" name="tertiary" {...rest}>
        Tertiary
      </StoryComponent>
    </Box>
  );
};

export const ColorAccent = TemplateAllAppearances.bind({});
export const ColorNeutral = TemplateAllAppearances.bind({});
export const ColorGreen = TemplateAllAppearances.bind({});
export const ColorSemanticBad = TemplateAllAppearances.bind({});

ColorAccent.args = {
  color: "accent",
};
ColorNeutral.args = {
  color: "neutral",
};
ColorGreen.args = {
  color: "green",
};
ColorSemanticBad.args = {
  color: "red",
};

/** -----------------------------------------------------------------------------
 * Customisation
 * ------------------------------------------------------------------------------- */

export const CustomisationMargin = Template.bind({});

CustomisationMargin.args = {
  margin: "spacing5",
};

/** -----------------------------------------------------------------------------
 *  FontAwesome
 * ------------------------------------------------------------------------------- */

export const IconLeft = TemplateAllAppearances.bind({});
export const IconRight = TemplateAllAppearances.bind({});

IconLeft.args = {
  slotLeft: <Icon icon={faTriangleCircleSquare} />,
};

IconRight.args = {
  slotRight: <Icon icon={faTriangleCircleSquare} />,
};

/** -----------------------------------------------------------------------------
 * Size
 * ------------------------------------------------------------------------------- */

export const SizeSm = TemplateAllAppearances.bind({});
export const SizeMd = TemplateAllAppearances.bind({});
export const SizeLg = TemplateAllAppearances.bind({});
export const SizeSquare = TemplateAllAppearances.bind({});

SizeSm.args = {
  size: "sm",
};
SizeMd.args = {
  size: "md",
};
SizeLg.args = {
  size: "lg",
};

/** -----------------------------------------------------------------------------
 *  State
 * ------------------------------------------------------------------------------- */

export const StateHover = Template.bind({});
export const StateFocusVisible = Template.bind({});
export const StateDisabled = Template.bind({});

StateHover.parameters = { pseudo: { hover: true } };
StateFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
StateDisabled.args = {
  disabled: true,
};
