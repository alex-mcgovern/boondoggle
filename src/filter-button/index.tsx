import type { ReactNode } from "react";
import type {
	ButtonProps as AriaButtonProps,
	GroupProps as AriaGroupProps,
} from "react-aria-components";

import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { forwardRef } from "react";
import {
	Button as AriaButton,
	Group as AriaGroup,
} from "react-aria-components";

import { Icon } from "../icon";
import "./styles.css";

function FilterButtonGroup({
	isFilterApplied,
	...props
}: AriaGroupProps & {
	/**
	 * Whether a filter is applied to the group.
	 */
	isFilterApplied: boolean;
}) {
	return (
		<AriaGroup
			{...props}
			className={clsx(props.className, "filter-button-group")}
			data-filter-applied={isFilterApplied}
		/>
	);
}

function FilterButtonGroupLabel({ children }: { children: ReactNode }) {
	return <div className="filter-button-group-label">{children}</div>;
}

const RemoveFilterButton = forwardRef<
	HTMLButtonElement,
	Omit<AriaButtonProps, "children">
>((props, ref) => {
	return (
		<AriaButton
			{...props}
			aria-label="Remove filter"
			className={clsx(props.className, "remove-filter-button")}
			ref={ref}
		>
			<Icon icon={faTimesCircle} />
		</AriaButton>
	);
});

const FilterButtonComponent = forwardRef<HTMLButtonElement, AriaButtonProps>(
	(props, ref) => {
		return (
			<AriaButton
				{...props}
				className={clsx(props.className, "filter-button")}
				ref={ref}
			>
				{(renderProps) =>
					typeof props.children === "function"
						? props.children(renderProps)
						: props.children
				}
			</AriaButton>
		);
	},
);

/**
 * Represents a set of related UI controls for controlling filtering of data.
 */
export const FilterButton = {
	Button: FilterButtonComponent,
	Group: FilterButtonGroup,
	Label: FilterButtonGroupLabel,
	Remove: RemoveFilterButton,
};
