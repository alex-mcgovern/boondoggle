import {
	ColorItem,
	ColorPalette as StoryblokColorPalette,
} from "@storybook/blocks";
import { v } from "../style.css";
/**
 * Renders the Boondoggle color palette for Storybook.
 */

export function ColorPalette() {
	return (
		<StoryblokColorPalette>
			<ColorItem
				colors={{ black: v.color.black, white: v.color.white }}
				subtitle="General purpose neutral colors, that ARE NOT re-assigned by color overlay."
				title="Neutral"
			/>
			<ColorItem
				colors={{ background: v.color.background }}
				subtitle="Used for page background. Is re-assigned by color overlay."
				title="Background"
			/>
			<ColorItem
				colors={{
					tint_active: v.color.tint_active,
					tint_default: v.color.tint_default,
				}}
				subtitle="Used for tags, cards/surfaces, etc. Is re-assigned by color overlay."
				title="Tint"
			/>
			<ColorItem
				colors={{
					border_default: v.color.border_default,
					border_hover: v.color.border_hover,
				}}
				subtitle="Used for borders, dividers, etc. Is re-assigned by color overlay."
				title="Border"
			/>
			<ColorItem
				colors={{
					btn_active: v.color.btn_active,
					btn_default: v.color.btn_default,
					btn_tint: v.color.btn_tint,
				}}
				subtitle="Used for buttons, and other use cases requiring a saturated color. Is re-assigned by color overlay. Also used for the focus ring."
				title="Button"
			/>
			<ColorItem
				colors={{
					text_high_contrast: v.color.text_high_contrast,
					text_low_contrast: v.color.text_low_contrast,
				}}
				subtitle="Used for text. Is re-assigned by color overlay."
				title="Text"
			/>
		</StoryblokColorPalette>
	);
}
