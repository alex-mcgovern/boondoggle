import * as React from "react";
import { NumberRangeFilterMode } from "./types";

export const NumberRangeFilterModeContext = React.createContext<
	| [
			NumberRangeFilterMode,
			React.Dispatch<React.SetStateAction<NumberRangeFilterMode>>,
	  ]
	| undefined
>(undefined);

export const NumberRangeFilterModeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<NumberRangeFilterModeContext.Provider
			value={React.useState<NumberRangeFilterMode>("is_between")}
		>
			{children}
		</NumberRangeFilterModeContext.Provider>
	);
};

export const useNumberRangeFilterMode = () => {
	const context = React.useContext(NumberRangeFilterModeContext);

	if (context == null) {
		throw new Error(
			"NumberRangeFilterModeContext must be used within a NumberRangeFilterModeProvider",
		);
	}

	return context;
};
