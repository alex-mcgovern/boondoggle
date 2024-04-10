import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    SearchField as RACSearchField,
    type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components";

import { css } from "../css/index.css";
import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { searchFieldCSS, searchFieldClearButtonCSS } from "./styles.css";

/**
 * A `FieldButton` to clear the search field. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function SearchFieldClearButton() {
    return (
        <FieldButton className={searchFieldClearButtonCSS}>
            <Icon icon={faTimesCircle} />
        </FieldButton>
    );
}

/**
 * A `FieldButton` to copy the search field value to the clipboard. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function SearchFieldIcon() {
    return (
        <Icon
            className={css({
                flexShrink: "0",
                height: "space_6",
                minWidth: "space_6",
            })}
            color="text_low_contrast"
            icon={faSearch}
        />
    );
}

export type SearchFieldProps = RACSearchFieldProps;

/**
 * A search field allows a user to enter and clear a search query. [Built with React Aria SearchField component](https://react-spectrum.adobe.com/react-aria/SearchField.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { SearchField, type SearchFieldProps } from "boondoggle/search-field"
 * ```
 */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
    (props, ref) => {
        return (
            <RACSearchField
                {...props}
                className={({ isDisabled, isEmpty, isInvalid }) =>
                    clsx(
                        props.className,
                        searchFieldCSS({ isDisabled, isEmpty, isInvalid }),
                    )
                }
                ref={ref}
            />
        );
    },
);
