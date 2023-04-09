import { useCombobox } from "downshift";

import type { SelectMultipleProps } from "./SelectMultiple/index";
import type {
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from "downshift";
import type { DropdownItemShape } from "~types/global.types";

/**
 * Maintains the state of the `Select` component, is passed to downshift as the `stateReducer` prop.
 * @see https://www.downshift-js.com/use-combobox/#state-reducer
 */

export const downshiftStateReducer = (
  state: UseComboboxState<DropdownItemShape>,
  actionAndChanges: UseComboboxStateChangeOptions<DropdownItemShape>,
  { isMulti }: Partial<Pick<SelectMultipleProps, "isMulti">>
) => {
  const { changes, type } = actionAndChanges;

  switch (type) {
    /**
     * Prevent flash of menu on first input click
     * Should be resolved by issue here: https://github.com/downshift-js/downshift/issues/1439
     * @todo: [Select] Test downshift fix and report back
     */
    case useCombobox.stateChangeTypes.InputFocus:
      return { ...changes, isOpen: false };

    /** Keep the menu open in multi-select mode */

    case useCombobox.stateChangeTypes.InputBlur:
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
    case useCombobox.stateChangeTypes.ItemClick:
      return {
        ...changes,
        ...(changes.selectedItem && {
          isOpen: isMulti,
          highlightedIndex: state.highlightedIndex,
        }),
      };

    default:
      return changes;
  }
};
