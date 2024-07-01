import type { SearchFieldProps as AriaSearchFieldProps } from "react-aria-components";

import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { SearchField as AriaSearchField } from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import "./styles.css";

function SearchFieldClearButton() {
    return (
        <FieldButton className="search-field-clear-button">
            <Icon icon={faTimesCircle} />
        </FieldButton>
    );
}

function SearchFieldIcon() {
    return (
        <Icon
            className="search-field-icon"
            icon={faSearch}
        />
    );
}

function SearchFieldRoot(props: AriaSearchFieldProps) {
    return (
        <AriaSearchField
            {...props}
            className={clsx(props.className, "search-field")}
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
 * ```tsx
 * import { SearchField, Input, Group } from "boondoggle";
 *
 * <SearchField.Root>
 *  <Group>
 *   <Group>
 *     <Input icon={<SearchField.Icon />} />
 *     <SearchField.ClearButton />
 *   </Group>
 * </SearchField.Root>
 * ```
 */
export const SearchField = {
    ClearButton: SearchFieldClearButton,
    Icon: SearchFieldIcon,
    Root: SearchFieldRoot,
};
