import * as React from "react";
import * as styles from "./FilterPillGroup.css";

/**
 * @private This is an internal component not intended for public use.
 */
export const FilterPillGroup = React.forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		isFiltered: boolean;
	}
>(({ children, isFiltered }, ref) => {
	return (
		<div ref={ref} className={styles.pillGroup({ isFiltered })}>
			{children}
		</div>
	);
});
