import { faSearch } from "@fortawesome/pro-regular-svg-icons/faSearch";
import { faTimesCircle } from "@fortawesome/pro-regular-svg-icons/faTimesCircle";
import clsx from "clsx";
import * as React from "react";
import {
	SearchField as RACSearchField,
	type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { sprinkles } from "../sprinkles/index.css";
import { textFieldCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * SearchFieldClearButton
 * ------------------------------------------------------------------------------- */

export const SearchFieldClearButton = () => {
	return (
		<FieldButton>
			<Icon icon={faTimesCircle} />
		</FieldButton>
	);
};

/** -----------------------------------------------------------------------------
 * SearchFieldClearButton
 * ------------------------------------------------------------------------------- */

export const SearchFieldIcon = () => {
	return (
		<Icon
			className={sprinkles({
				color: "text_low_contrast",
				flexShrink: "0",
				height: "space_6",
				width: "space_6",
			})}
			color="text_low_contrast"
			icon={faSearch}
		/>
	);
};

/** -----------------------------------------------------------------------------
 * SearchField
 * ------------------------------------------------------------------------------- */

export type SearchFieldProps = RACSearchFieldProps;

/**
 * A search field allows a user to enter and clear a search query.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/SearchField.html)
 */
export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
	(props, ref) => {
		return (
			<RACSearchField
				{...props}
				className={clsx(props.className, textFieldCSS)}
				ref={ref}
			/>
		);
	},
);
