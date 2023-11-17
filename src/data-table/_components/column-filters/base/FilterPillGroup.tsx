import * as React from "react";
import { pillGroupCSS } from "./FilterPillGroup.css";

export const FilterPillGroup = React.forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		isFiltered: boolean;
	}
>(({ children, isFiltered }, ref) => {
	return (
		<div ref={ref} className={pillGroupCSS({ isFiltered })}>
			{children}
		</div>
	);
});
