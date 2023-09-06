const SELECTOR_IS_LINK_BUTTON_INPUT = ":is(a,button,input)";

const SELECTOR_IS_NOT_DISABLED = ":not(:is([disabled], [aria-disabled='true']))";

export const SELECTOR_IS_HOVER = `:is(:hover)`;

export const SELECTOR_IS_FOCUS = `:is(:focus-visible)`;

const SELECTOR_IS_HOVER_FOCUS = `:is(:hover, :focus-visible)`;

const SELECTOR_IS_ACTIVE = `is(:active, [data-active='true'])`;

/**
 * Button/link/input: hover
 */
const hoverSelectorArray = [
    "&",
    SELECTOR_IS_LINK_BUTTON_INPUT,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_HOVER,
];

export const SELECTOR_LINK_BUTTON_INPUT_HOVER = hoverSelectorArray.join("");

/**
 * Button/link/input: focus
 */
const focusSelectorArray = [
    "&",
    SELECTOR_IS_LINK_BUTTON_INPUT,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_FOCUS,
];

export const SELECTOR_LINK_BUTTON_INPUT_FOCUS = focusSelectorArray.join("");

/**
 * Button/link/input: hover/focus
 */
const hoverFocusSelectorArray = [
    "&",
    SELECTOR_IS_LINK_BUTTON_INPUT,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_HOVER_FOCUS,
];

export const SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS = hoverFocusSelectorArray.join("");

/**
 * Button/link/input: active
 */
const activeSelectorArray = [
    "&",
    SELECTOR_IS_LINK_BUTTON_INPUT,
    SELECTOR_IS_NOT_DISABLED,
    SELECTOR_IS_ACTIVE,
];

export const SELECTOR_LINK_BUTTON_INPUT_ACTIVE = activeSelectorArray.join("");
