export const SELECTOR_IS_LINK_OR_BUTTON = ":is(a,button)";
export const SELECTOR_IS_NOT_DISABLED = ":not([disabled])";

export const SELECTOR_IS_HOVER = `:is(:hover)`;
export const SELECTOR_IS_FOCUS = `:is(:focus-visible)`;
export const SELECTOR_IS_HOVER_FOCUS = `:is(:hover, :focus-visible)`;

/** —
 * BUTTON/LINK: HOVER
 */
const hoverSelectorArray = [
  "&",
  SELECTOR_IS_LINK_OR_BUTTON,
  SELECTOR_IS_NOT_DISABLED,
  SELECTOR_IS_HOVER,
];
export const SELECTOR_LINK_BUTTON_HOVER = hoverSelectorArray.join("");

/** —
 * BUTTON/LINK: FOCUS
 */
const focusSelectorArray = [
  "&",
  SELECTOR_IS_LINK_OR_BUTTON,
  SELECTOR_IS_NOT_DISABLED,
  SELECTOR_IS_FOCUS,
];
export const SELECTOR_LINK_BUTTON_FOCUS = focusSelectorArray.join("");

/** —
 * BUTTON/LINK: HOVER/FOCUS
 */
const hoverFocusSelectorArray = [
  "&",
  SELECTOR_IS_LINK_OR_BUTTON,
  SELECTOR_IS_NOT_DISABLED,
  SELECTOR_IS_HOVER_FOCUS,
];
export const SELECTOR_LINK_BUTTON_HOVER_FOCUS =
  hoverFocusSelectorArray.join("");
