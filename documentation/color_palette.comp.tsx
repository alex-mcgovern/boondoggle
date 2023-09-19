import { ColorItem, ColorPalette as StoryblokColorPalette } from "@storybook/blocks";

import { vars } from "../src/styles/theme.css";

/**
 * Renders the Boondoggle color palette for Storybook.
 */
export function ColorPalette() {
    return (
        <StoryblokColorPalette>
            <ColorItem
                colors={{ black: vars.color.black, white: vars.color.white }}
                subtitle="General purpose neutral colors, that ARE NOT re-assigned by color overlay."
                title="Neutral"
            />
            <ColorItem
                colors={{ background: vars.color.background }}
                subtitle="Used for page background. Is re-assigned by color overlay."
                title="Background"
            />
            <ColorItem
                colors={{
                    tint_active: vars.color.tint_active,
                    tint_default: vars.color.tint_default,
                }}
                subtitle="Used for tags, cards/surfaces, etc. Is re-assigned by color overlay."
                title="Tint"
            />
            <ColorItem
                colors={{
                    border_default: vars.color.border_default,
                    border_hover: vars.color.border_hover,
                }}
                subtitle="Used for borders, dividers, etc. Is re-assigned by color overlay."
                title="Border"
            />
            <ColorItem
                colors={{
                    button_active: vars.color.button_active,
                    button_default: vars.color.button_default,
                    button_tint: vars.color.button_tint,
                }}
                subtitle="Used for buttons, and other use cases requiring a saturated color. Is re-assigned by color overlay. Also used for the focus ring."
                title="Button"
            />
            <ColorItem
                colors={{
                    text_high_contrast: vars.color.text_high_contrast,
                    text_low_contrast: vars.color.text_low_contrast,
                }}
                subtitle="Used for text. Is re-assigned by color overlay."
                title="Text"
            />
        </StoryblokColorPalette>
    );
}
