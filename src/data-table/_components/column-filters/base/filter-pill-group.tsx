import * as React from "react";

import { pillGroupCSS } from "./filter-pill-group.css";

export const FilterPillGroup = React.forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		isFiltered: boolean;
	}
>(({ children, isFiltered }, ref) => {
	return (
		<div className={pillGroupCSS({ isFiltered })} ref={ref}>
			{children}
		</div>
	);
});
