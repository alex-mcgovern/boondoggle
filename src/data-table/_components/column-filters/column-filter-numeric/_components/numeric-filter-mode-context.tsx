import * as React from "react";
import { TableNumberRangeFilterMode } from "../../../../types";

export const NumericFilterModeContext = React.createContext<
	| [
			TableNumberRangeFilterMode,
			React.Dispatch<React.SetStateAction<TableNumberRangeFilterMode>>,
	  ]
	| undefined
>(undefined);

export const NumericFilterModeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<NumericFilterModeContext.Provider
			value={React.useState<TableNumberRangeFilterMode>("is_between")}
		>
			{children}
		</NumericFilterModeContext.Provider>
	);
};

export const useNumericFilterMode = () => {
	const context = React.useContext(NumericFilterModeContext);

	if (context == null) {
		throw new Error(
			"NumericFilterModeContext must be used within a NumericFilterModeProvider",
		);
	}

	return context;
};
