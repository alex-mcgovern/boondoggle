import {
  ColorItem,
  ColorPalette as StoryblokColorPalette,
} from "@storybook/blocks";

import { vars } from "../src/styles/theme.css";

export function ColorPalette() {
  return (
    <StoryblokColorPalette>
      <ColorItem
        title="Neutral"
        subtitle="General purpose neutral colors, that ARE NOT re-assigned when in dark mode or by intent."
        colors={{ white: vars.color.white, black: vars.color.black }}
      />
      <ColorItem
        title="Background"
        subtitle="Used for page background. Is re-assigned when in dark mode or by intent."
        colors={{ background: vars.color.background }}
      />
      <ColorItem
        title="Tint"
        subtitle="Used for tags, cards/surfaces, etc. Is re-assigned when in dark mode or by intent."
        colors={{
          tint_default: vars.color.tint_default,
          tint_active: vars.color.tint_active,
        }}
      />
      <ColorItem
        title="Border"
        subtitle="Used for borders, dividers, etc. Is re-assigned when in dark mode or by intent."
        colors={{
          border_default: vars.color.border_default,
          border_active: vars.color.border_active,
        }}
      />
      <ColorItem
        title="Button"
        subtitle="Used for buttons, and other use cases requiring a saturated color. Is re-assigned when in dark mode or by intent. Also used for the focus ring."
        colors={{
          button_default: vars.color.button_default,
          button_active: vars.color.button_active,
        }}
      />
      <ColorItem
        title="Text"
        subtitle="Used for text. Is re-assigned when in dark mode or by intent."
        colors={{
          text_low_contrast: vars.color.text_low_contrast,
          text_high_contrast: vars.color.text_high_contrast,
        }}
      />
    </StoryblokColorPalette>
  );
}
