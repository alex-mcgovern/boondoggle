import type { ReactNode } from "react";

import { forwardRef } from "react";

import { pillGroupCSS } from "./filter-pill-group.css";

export const FilterPillGroup = forwardRef<
	HTMLDivElement,
	{
		children: ReactNode;
		isFiltered: boolean;
	}
>(({ children, isFiltered }, ref) => {
	return (
		<div className={pillGroupCSS({ isFiltered })} ref={ref}>
			{children}
		</div>
	);
});
