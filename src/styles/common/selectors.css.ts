export const SELECTOR_IS_LINK_OR_BUTTON = ":is(a,button)";
export const SELECTOR_IS_NOT_DISABLED = ":not([disabled])";

export const SELECTOR_IS_HOVER = `:is(:hover)`;
export const SELECTOR_IS_FOCUS = `:is(:focus-visible)`;
export const SELECTOR_IS_HOVER_FOCUS = `:is(:hover, :focus-visible)`;
export const SELECTOR_IS_ACTIVE = `:active`;

/**
 * Button/link: hover
 */
const hoverSelectorArray = [
    "&",
    SELECTOR_IS_LINK_OR_BUTTON,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_HOVER,
];
export const SELECTOR_LINK_BUTTON_HOVER = hoverSelectorArray.join("");

/**
 * Button/link: focus
 */
const focusSelectorArray = [
    "&",
    SELECTOR_IS_LINK_OR_BUTTON,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_FOCUS,
];
export const SELECTOR_LINK_BUTTON_FOCUS = focusSelectorArray.join("");

/**
 * Button/link: hover/focus
 */
const hoverFocusSelectorArray = [
    "&",
    SELECTOR_IS_LINK_OR_BUTTON,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_HOVER_FOCUS,
];
export const SELECTOR_LINK_BUTTON_HOVER_FOCUS =
    hoverFocusSelectorArray.join("");

/**
 * Button/link: hover/focus
 */
const activeSelectorArray = [
    "&",
    SELECTOR_IS_LINK_OR_BUTTON,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_ACTIVE,
];
export const SELECTOR_LINK_BUTTON_ACTIVE = activeSelectorArray.join("");
