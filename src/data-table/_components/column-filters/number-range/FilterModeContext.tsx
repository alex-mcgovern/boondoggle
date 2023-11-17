import * as React from "react";
import { TableNumberRangeFilterMode } from "../../../types";

export const TableNumberRangeFilterModeContext = React.createContext<
	| [
			TableNumberRangeFilterMode,
			React.Dispatch<React.SetStateAction<TableNumberRangeFilterMode>>,
	  ]
	| undefined
>(undefined);

export const TableNumberRangeFilterModeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<TableNumberRangeFilterModeContext.Provider
			value={React.useState<TableNumberRangeFilterMode>("is_between")}
		>
			{children}
		</TableNumberRangeFilterModeContext.Provider>
	);
};

export const useTableNumberRangeFilterMode = () => {
	const context = React.useContext(TableNumberRangeFilterModeContext);

	if (context == null) {
		throw new Error(
			"TableNumberRangeFilterModeContext must be used within a TableNumberRangeFilterModeProvider",
		);
	}

	return context;
};
