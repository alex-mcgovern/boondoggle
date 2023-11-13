import * as React from "react";
import * as styles from "./FilterPillGroup.css";

/**
 * @private This is an internal component not intended for public use.
 */
export const PrivateDataTableFilterPillGroup = (
	{
		children,
		isFiltered,
	}: {
		children: React.ReactNode;
		isFiltered: boolean;
	},
	ref: React.ForwardedRef<HTMLDivElement>,
) => {
	return (
		<div ref={ref} className={styles.pillGroup({ isFiltered })}>
			{children}
		</div>
	);
};

export const FilterPillGroup = React.forwardRef(
	PrivateDataTableFilterPillGroup,
);
