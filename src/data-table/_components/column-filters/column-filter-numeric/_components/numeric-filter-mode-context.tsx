import type { Dispatch, ReactNode, SetStateAction } from "react";

import { createContext, useContext, useState } from "react";

import type { TableNumberRangeFilterMode } from "../../../../types";

export const NumericFilterModeContext = createContext<
	| [
			TableNumberRangeFilterMode,
			Dispatch<SetStateAction<TableNumberRangeFilterMode>>,
	  ]
	| undefined
>(undefined);

export const NumericFilterModeProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<NumericFilterModeContext.Provider
			value={useState<TableNumberRangeFilterMode>("is_between")}
		>
			{children}
		</NumericFilterModeContext.Provider>
	);
};

export const useNumericFilterMode = () => {
	const context = useContext(NumericFilterModeContext);

	if (context == null) {
		throw new Error(
			"NumericFilterModeContext must be used within a NumericFilterModeProvider",
		);
	}

	return context;
};
