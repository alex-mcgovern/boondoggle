import type { StyleRule } from "@vanilla-extract/css";

/**
 * A utility function to wrap a @link {StyleRule} with a media query
 * that checks if the user prefers reduced motion.
 */
export function withPrefersMotion({ ...styleRules }: StyleRule): StyleRule {
    return {
        "@media": {
            "(prefers-reduced-motion: no-preference)": {
                ...styleRules,
            },
        },
    };
}

type PaletteKey = `${string}${number}`;

type PaletteShape = Record<PaletteKey, string>;

/**
 * A utility function to get a specific step from a palette.
 */
function step(palette: Record<PaletteKey, string>, target_step: number) {
    return palette[Object.keys(palette)[target_step - 1] as PaletteKey];
}

/**
 * A utility function to generate a theme definition from a set of palettes.
 */
export const makeTheme = ({
    alpha,
    isOverlay,
    primary,
    secondary,
}: {
    alpha: PaletteShape;
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}) => {
    return {
        backdrop: step(alpha, 11),

        background: step(secondary, 1),

        bg_field: step(secondary, isOverlay ? 3 : 2),
        bg_field_active: step(secondary, 1),

        bg_filter_button: step(secondary, isOverlay ? 4 : 3),
        bg_filter_button_active: step(secondary, isOverlay ? 5 : 4),

        bg_switch: step(secondary, 7),
        bg_switch_active: step(primary, 9),

        bg_toast: step(secondary, 12),
        black: step(secondary, 12),

        border_field: step(secondary, isOverlay ? 7 : 6),
        border_field_active: step(secondary, isOverlay ? 8 : 7),

        border_rule: step(secondary, isOverlay ? 6 : 5),

        btn_bg_ghost: "transparent",
        btn_bg_ghost_active: step(secondary, isOverlay ? 4 : 3),

        btn_bg_secondary: step(secondary, isOverlay ? 3 : 2),

        btn_bg_secondary_active: step(secondary, isOverlay ? 4 : 3),
        btn_primary_bg: step(primary, 9),

        btn_primary_bg_active: step(primary, 10),
        button_tint: step(primary, 5),

        focus_border: step(primary, isOverlay ? 9 : 8),
        focus_ring: step(primary, 6),

        switch_foreground: step(secondary, 1),
        tab_hover_color: step(secondary, isOverlay ? 4 : 3),

        tab_selected_color: step(primary, isOverlay ? 4 : 3),
        text_high_contrast: step(secondary, isOverlay ? 11 : 12),

        text_low_contrast: step(secondary, 11),
        tint_active: step(secondary, isOverlay ? 5 : 4),

        tint_default: step(secondary, isOverlay ? 3 : 2),
        tint_hover: step(secondary, isOverlay ? 4 : 3),

        toast_icon: step(primary, 7),
        toast_text: step(primary, 1),
        white: step(secondary, 1),
    };
};
