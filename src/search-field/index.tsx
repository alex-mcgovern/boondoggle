import type { ForwardedRef } from "react";
import type { SearchFieldProps as AriaSearchFieldProps } from "react-aria-components";

import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { SearchField as AriaSearchField } from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import "./styles.css";

/**
 * A `FieldButton` to clear the search field. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function SearchFieldClearButton() {
    return (
        <FieldButton className="search-field-clear-button">
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
            className="search-field-icon"
            icon={faSearch}
        />
    );
}

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
export function SearchField({
    ref,
    ...props
}: AriaSearchFieldProps & { ref?: ForwardedRef<HTMLInputElement> }) {
    return (
        <AriaSearchField
            {...props}
            className={clsx(props.className, "search-field")}
            ref={ref}
        />
    );
}
